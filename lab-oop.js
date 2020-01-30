class UserTemplate {
  constructor(name, password, age) {
    this.name = name;
    this.password = password;
    this.age = age;
    this.connected = false;

    // เก็บข้อมูลวันที่สร้าง object
    this.creationDate = new Date();
  }

  login() {
    this.connected = true;
    // เรียก checkStatus แทนการ log เอง
    this.checkStatus();
  }

  // เพิ่ม method logout
  logout() {
    // assign connection = false
    this.connected = false;
    this.checkStatus();
  }

  // เพิ่ม method checkStatus
  checkStatus() {
    // log สถานะ connected
    console.log('your login status: ', this.connected);
  }
}

let user1 = new UserTemplate('Andy', 'aaa', 25);
user1.creationDate();
user1.login();
user1.logout();
user1.checkStatus();