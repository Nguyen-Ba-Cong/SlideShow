function slide()
{
	var index=0;
	changeImage= function()
	{
		var imgs=["quan-jean-den.jpg","quan-jean-xanh.jpg","quan-jean-xam.jpg","quan-kaki.jpg"];
		var captions=["Quần Jeans Đen","Quần Jeans Xanh","Quần Jeans Xám","Quần Kaki"];
		document.getElementById('img').src=imgs[index];
		document.getElementById('caption').innerHTML=captions[index];
		index++;
		if(index==4)
		{
			index=0;
		}
	}
	setInterval(changeImage,1000);
}
slide();