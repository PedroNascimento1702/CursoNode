const schedule = require('node-schedule');


const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1,5)];
regra.hour = 10;
regra.second = 5;

const tarefa = schedule.scheduleJob(regra,function(){
    console.log("Tarefa 2 executando!")
})