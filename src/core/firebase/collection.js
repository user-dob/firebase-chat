import { firebaseDb } from './firebase'

export class FirebaseCollection {
  constructor(path, modelClass) {
    Object.assign(this, {
      path,
      modelClass,
      db: firebaseDb
    })
  }

  onLoad(collection) {
    throw new TypeError("Do not call abstract method onLoad from child.")
  }

  onAdd() {
    throw new TypeError("Do not call abstract method onAdd from child.")
  }

  onChange() {
    throw new TypeError("Do not call abstract method onChange from child.")
  }

  onRemove() {
    throw new TypeError("Do not call abstract method onRemove from child.")
  }

  find(field, value) {
    return new Promise((resolve, reject) => {
      firebaseDb.ref(this.path)
        .orderByChild(field)
        .startAt(value)
        .endAt(value)
        .once('value', snapshot => resolve(snapshot.val()))
    })
  }

  push(value) {
    return new Promise((resolve, reject) => {
      firebaseDb.ref(this.path)
        .push(value, error => error ? reject(error) : resolve())
    })
  }

  remove(key) {
    return new Promise((resolve, reject) => {
      firebaseDb.ref(`${this.path}/${key}`)
        .remove(error => error ? reject(error) : resolve())
    })
  }

  update(key, value) {
    return new Promise((resolve, reject) => {
      firebaseDb.ref(`${this.path}/${key}`)
        .update(value, error => error ? reject(error) : resolve())
    })
  }

  subscribe(emit) {
    let ref = firebaseDb.ref(this.path)
    let collection = []
    let isInitialized = false

    ref.once('value', () => {
      isInitialized = true
      emit(this.onLoad(collection))
    })

    ref.on('child_added', snapshot => {
      if (isInitialized) {
        emit(this.onAdd(this.unwrapSnapshot(snapshot)));
      }
      else {
        collection.push(this.unwrapSnapshot(snapshot));
      }
    });

    ref.on('child_changed', snapshot => {
      emit(this.onChange(this.unwrapSnapshot(snapshot)));
    });

    ref.on('child_removed', snapshot => {
      emit(this.onRemove(this.unwrapSnapshot(snapshot)));
    });

    return () => ref.off()
  }

  unwrapSnapshot(snapshot) {
    let attrs = snapshot.val();
    attrs.key = snapshot.key;
    return new this.modelClass(attrs);
  }


}