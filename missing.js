var words= ["river", "honey", "flower"];
var word = words[Math.floor(Math.random() * words.length)];
var str = word.split("");
var res = word.split("");
var letter = res[Math.floor(Math.random() * res.length)];
document.write(res);
document.write('&nbsp;'+res.length);
// 
 // var resnew=res.replace(/,/g,'');
  // res = res.replace(letter, '_')

// res[x]=res[x].replace('o', '');

for(i=0;i<(res.length);i++)
{
	if(res[i]==letter)
	{
		res[i]="_";
	}
}
// document.write(word +'&nbsp;'); 
// document.write(letter +'&nbsp;' +'&nbsp;');
document.write('&nbsp;'+ res +'&nbsp;');
 // var txt = "";

 // res.forEach(myFunction);

 // function myFunction(value) {
 //   txt = txt + value + " "; 
 // // }
 