export class MenuItem {
  path: string;
  title: string;

  constructor(obj: MenuItem) {
    this.path = obj.path;
    this.title = obj.title;
  }
}
