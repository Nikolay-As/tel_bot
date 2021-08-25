const token="1779185185:AAGmFcZBsXZVs7ifc9YdFVWV4NU6jl6zRSg"; // Токен от бота

//const Tel_api=require('node-telegram-bot-api')
const Tg=require('tgfancy')  // последовательная отправка смс
const fs=require('fs')

//const bot=new Tel_api(token,{polling:true});
const bott=new Tg(token,{polling:true});


bott.on('message',msg=>{ // Прослушиваем ответ от Телеграмма

    const text=msg.text;        // Получаем текст сообщения
    const chatId=msg.chat.id;   // Получаем айди чата

   

    if (text==='🙋🏻‍♂️Основатель компании'){

         bott.sendPhoto(chatId,'./files/Основатель компании/Основатель компании.jpg')
         bott.sendMessage(chatId,fs.readFileSync('./files/Основатель компании/doc.txt','utf8'))
         //bott.sendMessage(chatId,'Знакомьтесь, это Марк Богатыренко, основатель Artery Network.\n\nЗа свои 30 лет Марк сумел преуспеть как в традиционном бизнесе, так и в сетевом. В сетевом особенно. В одной из компаний Марк создал структуру в 48000 человек, в другой 15600 человек.\n\nПроходил с низов от дестрибьютора до ТОП лидера и получив этот опыт Марк принял решение создать сетевую компанию "Artery Network", чтобы реализовать на блокчейне свою идею.\n\nИмея аналитическое и стратегическое мышление Марк проанализировал около 50 различных компаний и взял самое лучшее для Artery, стараясь сделать идеальную компанию от которой будет польза всем участникам.')

         bott.sendMessage(chatId,'👌🏻Ниже ознакомься с интересными мыслями, маркетингом и интервью с Марком.👇🏻👇🏻',{
            reply_markup:{
                keyboard: [
                    ['🙋🏻‍♂️Основатель компании'],
                    ['💰Криптовалюта Artery', '🧩Продукты компании'],
                    ['🎥Проморолик','📱Приложение'],
                    ['🎯С чего начать'],
                    ['💎Криптовалюта простым языком'],
                    ['🏛Маркетинг для каждого👌🏻'],
                    ['💁🏻‍♂️Откуда берутся деньги'],
                    ['💰Обменник','🧑🏻‍💻Валидатор и доход💰']
                ]
            }
        })
    }

    if (text==='💰Криптовалюта Artery'){

        bott.sendMessage(chatId,"Sending video...")

        bott.sendVideo(chatId,'./files/Криптовалюта Artery/Криптовалюта Artery.mp4')
        bott.sendMessage(chatId,fs.readFileSync('./files/Криптовалюта Artery/doc.txt','utf8'))

        bott.sendMessage(chatId,"Главное меню",{
            reply_markup:{
                keyboard: [
                    ['🙋🏻‍♂️Основатель компании'],
                    ['💰Криптовалюта Artery', '🧩Продукты компании'],
                    ['🎥Проморолик','📱Приложение'],
                    ['🎯С чего начать'],
                    ['💎Криптовалюта простым языком'],
                    ['🏛Маркетинг для каждого👌🏻'],
                    ['💁🏻‍♂️Откуда берутся деньги'],
                    ['💰Обменник','🧑🏻‍💻Валидатор и доход💰']
                ]
            }
        })
   }

   if (text==='🧩Продукты компании'){

    
    bott.sendMessage(chatId,"Sending video...")

    bott.sendVideo(chatId,'./files/Продукты компании/1.mp4')

    bott.sendMessage(chatId,fs.readFileSync('./files/Продукты компании/doc.txt','utf8'))

    bott.sendVideo(chatId,'./files/Продукты компании/2.mp4')

    bott.sendVideo(chatId,'./files/Продукты компании/3.mp4')

    bott.sendMessage(chatId,fs.readFileSync('./files/Продукты компании/doc2.txt','utf8'))

    bott.sendVideo(chatId,'./files/Продукты компании/4.mp4')

    bott.sendMessage(chatId,fs.readFileSync('./files/Продукты компании/doc3.txt','utf8'))

    bott.sendVideo(chatId,'./files/Продукты компании/5.mp4')


   }


   if (text==='🎥Проморолик'){
    bott.sendMessage(chatId,fs.readFileSync('./files/Проморолик/doc.txt','utf8'))
    bott.sendMessage(chatId,"Sending video...")
    bott.sendVideo(chatId,'./files/Проморолик/1.mp4')

    bott.sendMessage(chatId,"Подменю",{
        reply_markup:{
            keyboard: [
                ['🗽Проморолик на английском языке'],
                ['Назад']
                        ]}
        })


   }

   if (text==='🗽Проморолик на английском языке'){
    bott.sendMessage(chatId,"Sending video...")
    bott.sendVideo(chatId,'./files/Проморолик/2.mp4')
   

   bott.sendMessage(chatId,"Подменю",{
    reply_markup:{
        keyboard: [
            ['🗽Проморолик на английском языке'],
            ['Назад']
                    ]}
    })

    }

    if (text==='Назад'){
        bott.sendMessage(chatId,"Главное меню",{
            reply_markup:{
                keyboard: [
                    ['🙋🏻‍♂️Основатель компании'],
                    ['💰Криптовалюта Artery', '🧩Продукты компании'],
                    ['🎥Проморолик','📱Приложение'],
                    ['🎯С чего начать'],
                    ['💎Криптовалюта простым языком'],
                    ['🏛Маркетинг для каждого👌🏻'],
                    ['💁🏻‍♂️Откуда берутся деньги'],
                    ['💰Обменник','🧑🏻‍💻Валидатор и доход💰']
                ]
            }
        })
    }


    if (text==="📱Приложение"){
        bott.sendMessage(chatId,fs.readFileSync('./files/Приложение/doc.txt','utf8'))
    }


    if (text==="🎯С чего начать"){
        bott.sendPhoto(chatId,'./files/С чего начать/1.jpg')
        bott.sendMessage(chatId,fs.readFileSync('./files/С чего начать/doc.txt','utf8'))
    }

    if (text==="💎Криптовалюта простым языком"){
        bott.sendMessage(chatId,fs.readFileSync('./files/Криптовалюта простым языком/doc.txt','utf8'))
        bott.sendVideoNote(chatId,'https://www.youtube.com/watch?v=tGL024WpzZc')//'./files/Криптовалюта простым языком/1.mp4') //////////
        //bott.sendDocument(chatId,'./files/Криптовалюта простым языком/1.mp4')
    }



    console.log(msg);
})
