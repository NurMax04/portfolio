const data = [
	[
		"Сосновая доска обрезная",
		"Пиломатериалы",
		"25×150×6000 мм",
		14500,
		"photo-1504307651254-35680f356dfd",
	],
	[
		"Брус строительный",
		"Пиломатериалы",
		"100×100×6000 мм",
		18900,
		"photo-1518780664697-55e3ad937233",
	],
	[
		"Вагонка штиль",
		"Пиломатериалы",
		"12.5×96×3000 мм",
		980,
		"photo-1512690459411-b9245aed614b",
	],
	[
		"Доска строганая",
		"Пиломатериалы",
		"40×150×6000 мм",
		21800,
		"photo-1518005020951-eccb494ad742",
	],
	[
		"Блок газобетонный",
		"Блоки",
		"600×300×200 мм",
		520,
		"photo-1511818966892-d7d671e672a2",
	],
	[
		"Кирпич облицовочный",
		"Блоки",
		"250×120×65 мм",
		42,
		"photo-1600607687939-ce8a6c25118c",
	],
	[
		"Блок керамзитобетонный",
		"Блоки",
		"390×190×188 мм",
		95,
		"photo-1600585154526-990dced4db0d",
	],
	[
		"Смесь кладочная М150",
		"Смеси",
		"25 кг",
		340,
		"photo-1504307651254-35680f356dfd",
	],
	["Цемент М500", "Смеси", "50 кг", 620, "photo-1518005020951-eccb494ad742"],
	[
		"Штукатурка гипсовая",
		"Смеси",
		"30 кг",
		460,
		"photo-1600607687939-ce8a6c25118c",
	],
];
const products = document.querySelector("#products");
let cart = [];
const fmt = n => new Intl.NumberFormat("ru-RU").format(n) + " ₽";
function renderProducts(filter = "Все") {
	products.innerHTML = data
		.map((p, i) => ({ p, i }))
		.filter(x => filter === "Все" || x.p[1] === filter)
		.map(
			({ p, i }) =>
				`<article class="product"><img loading="lazy" src="https://images.unsplash.com/${p[4]}?auto=format&fit=crop&w=600&q=75" alt="${p[0]}"><div class="product-meta"><span>${p[1]}</span><span>${p[2]}</span></div><h3>${p[0]}</h3><div class="product-bottom"><span class="product-price">${fmt(p[3])} <small>/ шт.</small></span><button class="add-cart" data-add="${i}" aria-label="Добавить ${p[0]} в корзину">+</button></div></article>`,
		)
		.join("");
}
renderProducts();
document.querySelectorAll(".filter").forEach(
	b =>
		(b.onclick = () => {
			document.querySelector(".filter.active").classList.remove("active");
			b.classList.add("active");
			renderProducts(b.dataset.filter);
		}),
);
products.onclick = e => {
	let b = e.target.closest("[data-add]");
	if (b) {
		let i = +b.dataset.add;
		let found = cart.find(x => x.i === i);
		found ? found.q++ : cart.push({ i, q: 1 });
		renderCart();
		document.querySelector("#cart").classList.add("open");
	}
};
function renderCart() {
	document.querySelector("#cartCount").textContent = cart.reduce(
		(s, x) => s + x.q,
		0,
	);
	document.querySelector("#cartItems").innerHTML = cart.length
		? cart
				.map(
					x =>
						`<div class="cart-row"><span>${data[x.i][0]} × ${x.q}</span><b>${fmt(data[x.i][3] * x.q)}</b><button data-remove="${x.i}">×</button></div>`,
				)
				.join("")
		: '<p style="font-size:12px;color:#777">Корзина пока пуста. Выберите товары из каталога.</p>';
	document.querySelector("#cartTotal").textContent = fmt(
		cart.reduce((s, x) => s + data[x.i][3] * x.q, 0),
	);
}
document.querySelector("#cartItems").onclick = e => {
	const b = e.target.closest("[data-remove]");
	if (b) {
		cart = cart.filter(x => x.i !== +b.dataset.remove);
		renderCart();
	}
};
document.querySelector("#cartOpen").onclick = () =>
	document.querySelector("#cart").classList.add("open");
document.querySelector("#cartClose").onclick = () =>
	document.querySelector("#cart").classList.remove("open");
document.querySelectorAll("[data-modal]").forEach(
	b =>
		(b.onclick = () => {
			document.querySelector("#cart").classList.remove("open");
			document.querySelector("#modal").classList.add("open");
		}),
);
document
	.querySelectorAll("[data-close]")
	.forEach(
		b =>
			(b.onclick = () =>
				document.querySelector("#modal").classList.remove("open")),
	);
document.addEventListener("keydown", e => {
	if (e.key === "Escape") {
		document.querySelector("#modal").classList.remove("open");
		document.querySelector("#cart").classList.remove("open");
	}
});
document.querySelectorAll(".lead-form").forEach(
	f =>
		(f.onsubmit = e => {
			e.preventDefault();
			document.querySelector("#modal").classList.remove("open");
			f.reset();
			const t = document.querySelector("#toast");
			t.classList.add("show");
			setTimeout(() => t.classList.remove("show"), 3200);
		}),
);
document.querySelector(".menu-toggle").onclick = () =>
	document.querySelector(".header nav").classList.toggle("open");
document
	.querySelectorAll(".header nav a")
	.forEach(
		a =>
			(a.onclick = () =>
				document.querySelector(".header nav").classList.remove("open")),
	);
