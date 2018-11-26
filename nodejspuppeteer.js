var value;
var dom2;
var result;
var result2;
var resul;
var number;
var namo = 2;
var namo1;
var text;
var fiftysecs = 50000;

const puppeteer = require('puppeteer');
const Discord = require('discord.js');
const bot = new Discord.Client()

const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: 'cd9994a3',
  apiSecret: 'F8NW5NuhbeGhkt1q'
});

bot.on('ready', () => {

 console.log(`Logged in as ${bot.user.tag}.`);
 bot.user.setStatus('invisible')
});



 let scrape = async () => {
for (i=1;i<=999;i++){
   function delay(time) {
      return new Promise(function(resolve) {
          setTimeout(resolve, time)
      });
   }
  const browser = await puppeteer.launch({headless: false,args: ['--proxy-server=94.103.226.170:53281']});
    const page = await browser.newPage()
    await page.goto('https://mafiamatrix.com')
    await delay(15000);
await page.evaluate(() => {
   let dom = document.querySelector('#g-recaptcha-response');
   dom.outerHTML = "<textarea id='g-recaptcha-response' name='g-recaptcha-response' class='g-recaptcha-response valid' style='width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; outline: 1px solid blue;' aria-invalid='false'>6LeLBQwTAAAAAEjOl7RVSY-x9mxPOxSOSkkR24aY</textarea>"

});

const page1 = await browser.newPage()
await page1.goto('http://2captcha.com/in.php?key=129173cb7fb2e640b4315189ea24ada7&method=userrecaptcha&googlekey=6LeLBQwTAAAAAEjOl7RVSY-x9mxPOxSOSkkR24aY&pageurl=https://mafiamatrix.com/&soft_id=1607');
await delay(5000);

const result = await page1.evaluate(() => {
//let dom = document.querySelector('body').innerText;
document.body.innerHTML = document.body.innerHTML.replace('OK|', '');
var number = document.querySelector('body').innerText;

return number;

});


const page2 = await browser.newPage()
//var new_result = result.replace('< number:', '');
await page2.goto('http://2captcha.com/res.php?key=129173cb7fb2e640b4315189ea24ada7&action=get&id=' + (result));

await delay(150000);
await page2.goto('http://2captcha.com/res.php?key=129173cb7fb2e640b4315189ea24ada7&action=get&id=' + (result));
await delay(5000);
await page2.goto('http://2captcha.com/res.php?key=129173cb7fb2e640b4315189ea24ada7&action=get&id=' + (result));


//const result2 = await page2.evaluate(() => {
//var ok = document.querySelector('body').innerText;
//return ok;
//});

//await page2.evaluate((result2) => {
//if (result2 == "CAPCHA_NOT_READY"){
  //await page2.goto('http://2captcha.com/res.php?key=129173cb7fb2e640b4315189ea24ada7&action=get&id=' + (result));
  //await delay(2000);
//}
//},result2);


const resul = await page2.evaluate(() => {
//let dom = document.querySelector('body').innerText;
document.body.innerHTML = document.body.innerHTML.replace('OK|', '');
var number1 = document.querySelector('body').innerText;
return number1;
});

await delay(5000);
await page.bringToFront();
await page.evaluate((resul) => {

let dom = document.querySelector('#g-recaptcha-response');
 dom.outerHTML = "<textarea id='g-recaptcha-response' name='g-recaptcha-response' class='g-recaptcha-response valid' style='width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; outline: 1px solid blue;' aria-invalid='false'>" + (resul) + "</textarea>"

},resul);

await page.$eval('#email', el => el.value = 'email here');
await page.$eval('#pass', el => el.value = 'password here');
await delay(10000);
await page.$eval( '#loginForm > button', form => form.click() )

await delay(5000);

var test = page.mainFrame().url();
console.log(test);
}


if (test !== "https://mafiamatrix.com/loggedin.asp"){
  await browser.close();
  const browser = await puppeteer.launch({headless: false,args: ['--proxy-server=94.103.226.170:53281']});

  await page.bringToFront();
  await page.goto('https://mafiamatrix.com')
  await page.evaluate(() => {
  let dom = document.querySelector('#g-recaptcha-response');
  dom.outerHTML = "<textarea id='g-recaptcha-response' name='g-recaptcha-response' class='g-recaptcha-response valid' style='width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; outline: 1px solid blue;' aria-invalid='false'>6LeLBQwTAAAAAEjOl7RVSY-x9mxPOxSOSkkR24aY</textarea>"

  });

  await page1.bringToFront();
  await page1.goto('http://2captcha.com/in.php?key=129thod=userrecaptcha&googlekey=6LeLBQwTAAAAAEjOl7RVSY-x9mxPOxSOSkkR24aY&pageurl=https://mafiamatrix.com/&soft_id=1607');
  await delay(5000);

  const result = await page1.evaluate(() => {
  //let dom = document.querySelector('body').innerText;
  document.body.innerHTML = document.body.innerHTML.replace('OK|', '');
  var number = document.querySelector('body').innerText;

  return number;

  });

  await page2.bringToFront();
  //var new_result = result.replace('< number:', '');
  await page2.goto('http://2captcha.com/res.php?key=129173cb7fb2e640b4315189ea24ada7&action=get&id=' + (result));

  await delay(150000);
  await page2.goto('http://2captcha.com/res.php?key=129173cb7fb2e640b4315189ea24ada7&action=get&id=' + (result));
  await delay(5000);
  await page2.goto('http://2captcha.com/res.php?key=129173cb7fb2e640b4315189ea24ada7&action=get&id=' + (result));

  const resul = await page2.evaluate(() => {
  //let dom = document.querySelector('body').innerText;
  document.body.innerHTML = document.body.innerHTML.replace('OK|', '');
  var number1 = document.querySelector('body').innerText;
  return number1;
  });

  await delay(5000);
  await page.bringToFront();
  await page.evaluate((resul) => {

  let dom = document.querySelector('#g-recaptcha-response');
  dom.outerHTML = "<textarea id='g-recaptcha-response' name='g-recaptcha-response' class='g-recaptcha-response valid' style='width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; outline: 1px solid blue;' aria-invalid='false'>" + (resul) + "</textarea>"

  },resul);

  await page.$eval('#email', el => el.value = 'jimmy69@gmail.com');
  await page.$eval('#pass', el => el.value = 'Wf139dl17');
  await delay(10000);
  await page.$eval( '#loginForm > button', form => form.click() )

  await delay(5000);

}
else {

await page.bringToFront();
await page.goto('https://mafiamatrix.com/loggedin.asp?display=play')
await delay(15000);
await page.goto('https://mafiamatrix.com/localcity/weaponshop.asp')
//HK
//*[@id="holder_content"]/form/table/tbody/tr[8]/td[4]
//*[@id="holder_content"]/form/table/tbody/tr[10]/td[4]

const name = (await page.$x('//*[@id="holder_content"]/form/table/tbody/tr[10]/td[4]'))[0];//name

const text = await page.evaluate(el => {
  // do what you want with featureArticle in page.evaluate
  return el.textContent;
}, name);
//HK
//*[@id="holder_content"]/form/table/tbody/tr[10]/td[4]
//*[@id="holder_content"]/form/table/tbody/tr[12]/td[4]
const name1 = (await page.$x('//*[@id="holder_content"]/form/table/tbody/tr[12]/td[4]'))[0];//name

const text1 = await page.evaluate(el => {
  return el.textContent;
}, name1);
//HK
//*[@id="holder_content"]/form/table/tbody/tr[15]/td[4]
//*[@id="holder_content"]/form/table/tbody/tr[17]/td[4]
const name2 = (await page.$x('//*[@id="holder_content"]/form/table/tbody/tr[17]/td[4]'))[0];//name

const text2 = await page.evaluate(el => {
  return el.textContent;
}, name2);
//HK
//*[@id="holder_content"]/form/table/tbody/tr[17]/td[4]
//*[@id="holder_content"]/form/table/tbody/tr[19]/td[4]
const name3 = (await page.$x('//*[@id="holder_content"]/form/table/tbody/tr[19]/td[4]'))[0];//name

const text3 = await page.evaluate(el => {
  return el.textContent;
}, name3);

//*[@id="holder_content"]/form/table/tbody/tr[4]

//*[@id="username_content"]/tbody/tr[1]/td[2]
console.log(text);
console.log(text1);

if (text >= 1){
 bot.channels.get('432288895078629376').send('LD Sniper Restock');

 nexmo.message.sendSms(
   '447842038049', '447842038049', 'LD Sniper Restock',
     (err, responseData) => {
       if (err) {
         console.log(err);
       } else {
         console.dir(responseData);
       }
     }
  );
}

if (text1 >= 1){
 bot.channels.get('432288895078629376').send('LD Plasma Restock');
 nexmo.message.sendSms(
   '447842038049', '447842038049', 'LD Plasma Restock',
     (err, responseData) => {
       if (err) {
         console.log(err);
       } else {
         console.dir(responseData);
       }
     }
  );
}

if (text2 >= 1){
 bot.channels.get('432288895078629376').send('LD Provest Restock');
 nexmo.message.sendSms(
   '447842038049', '447842038049', 'LD Provest Restock',
     (err, responseData) => {
       if (err) {
         console.log(err);
       } else {
         console.dir(responseData);
       }
     }
  );
}

if (text3 >= 1){
 bot.channels.get('432288895078629376').send('LD Kevlar Restock');

 nexmo.message.sendSms(
   '447842038049', '447842038049', 'LD Kevlar Restock',
     (err, responseData) => {
       if (err) {
         console.log(err);
       } else {
         console.dir(responseData);
       }
     }
  );
}

await page.goto('https://mafiamatrix.com/default.asp?action=logout')
await browser.close();
await delay(900000);
//};
//}
};

};
//};

scrape().then((value) => {
});

process.on('uncaughtException', function (err) {
  console.log(err);
})

bot.login('NDI3MzA0MzE2NDg4MTIyuaL4w');
