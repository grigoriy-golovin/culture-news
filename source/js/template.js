"use strict";

// mock

var articleData = [
	{
		isNew: true,
		image: "hotel",
		title: "Подводный отель",
		text:
			"Как известно, Дубай – город контрастов. Самые революционные и фантастические мечты архитекторов способен воплотить в жизнь этот мегаполис, построенный на нефти и за счет нефти",
	},
	{
		isNew: false,
		image: "mount",
		title: "Горы прекрасны",
		text:
			"Таким образом консультация с широким активом представляет собой интересный эксперимент проверки дальнейших направлений развития. Задача организации, в особенности же дальнейшее",
	},
	{
		isNew: false,
		image: "kite",
		title: "Поймай ветер",
		text:
			"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры способствует подготовки и реализации соответствующий условий активизации. Разнообразный и богатый",
	},
	{
		isNew: true,
		image: "foot",
		title: "Вкус жизни",
		text:
			"Равным образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Задача организации, в особенности же сложившаяся",
	},
	{
		isNew: false,
		image: "dogs",
		title: "Друг человека",
		text:
			"Идейные соображения высшего порядка, а также реализация намеченных плановых заданий представляет собой интересный эксперимент проверки существенных финансовых и административных",
	},
];

var articleInsert = document.querySelector("#articleInsert");
var templateArticle = document
	.querySelector("template")
	.content.querySelector("#templateArticle");

var createSlid = function (data) {
	var slid = templateArticle.cloneNode(true);
	if (data.isNew) {
		slid.classList.add("article--new");
	}
	slid.querySelector("source").srcset = "img/" + data.image + "-desktop@1x.jpg";
	slid.querySelector("img").srcset = "img/" + data.image + "-mobile@1x.jpg";
	slid.querySelector(".article__titel").textContent = data.title;
	slid.querySelector(".article__text").textContent = data.text;
	slid.removeAttribute("id");
	return slid;
}

for (var i = 0; i < articleData.length; i++) {
	articleInsert.appendChild(createSlid(articleData[i]));
}


var newsData = [
	{
		image: 'img/birds.jpg',
		title: 'Новости культуры России и всего мира',
		text: 'В минувшие выходные в Москве на фестивале «Оберег» вручили первую премию Russian World Music Awards',
	},
		{
		image: 'img/monument.jpg',
		title: 'Открытие нового памятника Евгению Леонову',
		text: '10 сентября в 15:00 был открыт памятник писателю',
	},
		{
		image: 'img/writer.jpg',
		title: 'Беседы с писателями',
		text: 'Русские писатели говорят о важности искусства',
	},
		{
		image: 'img/patrik.jpg',
		title: 'День и ночь св. Патрика: встреча старых друзей',
		text: 'Не Джойсом единым живет Ирландия!',
	},
]

var newsInsert = document.querySelector("#newsInsert");
var templateNews = document
	.querySelector("template")
	.content.querySelector("#templateNews");

var createNews = function (data) {
	var item = templateNews.cloneNode(true);
	item.querySelector(".news__item-img").src = data.image;
	item.querySelector(".news__item-title").textContent = data.title;
	item.querySelector(".news__item-text").textContent = data.text;
	item.removeAttribute("id");
	return item;
}

for (var i = 0; i < newsData.length; i++) {
	newsInsert.appendChild(createNews(newsData[i]));
}
