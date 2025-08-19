let employee = {
  accessMails: true,
  accessAllpc() {
    return "employee can access other pc";
  }
};

let admin={
    accessAllMails:true
}

let owner={
    isOwner:true
}

admin.__proto__=employee
owner.__proto__=employee

console.log(admin);
console.log(admin.accessAllpc());
console.log(owner.accessMails);
