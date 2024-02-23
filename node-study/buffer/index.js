const buffer1 = Buffer.from("geek");
const buffer2 = Buffer.from([12, 3, 4]);

const buffer3 = Buffer.alloc(20);

console.log(buffer1);
console.log(buffer2);
console.log(buffer3);
const fs = require("fs");
const protobuf = require("protocol-buffers");
const schema = protobuf(fs.readFileSync(__dirname + "/test.proto", "utf-8"));
console.log(schema);
console.log(schema.Column.encode({ id: 1, name: "2", price: 90 }));
