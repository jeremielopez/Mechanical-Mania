export abstract class Rest {
  public uid: string;
  public created: Date;
  public updated: Date;

  constructor(uid?: string, created?: Date, updated?: Date) {
    this.uid = uid || uuidv4();
    this.created = created || new Date();
    this.updated = updated || new Date();
  }

  public abstract get(uid: string): Rest;
  public abstract list(): Rest[];
  public abstract save(data: Rest): Rest;
  public abstract delete(uid: string): void;
}

/**
 * @function
 * @description Generate a UUID
 * @returns string
 */
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}