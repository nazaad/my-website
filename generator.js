let topics = [
  "Sun","Moon","Water","Air","Tree","Earth","Fire","Stone","River","Ocean",
  "Mountain","Forest","Animal","Bird","Fish","Food","Rice","Tea","Milk","Sugar"
];

let data = [];

for(let i=0;i<100;i++){
  let t = topics[i % topics.length] + " " + (i+1);

  data.push({
    title: t,
    content: t + " is an important topic in science and daily life. It has many uses and plays a role in nature, environment, and human survival."
  });
}

console.log(JSON.stringify(data));