let fullName = document.querySelector("input.fullName");
let hw = document.querySelector("input.hw");
let tax = document.querySelector("input.tax");
let select = document.querySelector("select.grade");
let submit = document.querySelector("input.submit");
let salary_box = document.querySelector("div.salary_box");
let salary_message = document.querySelector("p.salary_message");
let salary = document.querySelector("p.salary");

function splitter(str) {
	str = str.replace(/\,/g, "");
	let objRegexp = new RegExp("(-?[0-9]+)([0-9]{3})");

	while (objRegexp.test(str)) {
		str = str.replace(objRegexp, "$1,$2");
	}

	return str;
}

submit.addEventListener("click", () => {
	salary_box.classList.remove("opacity-0");
	salary_box.classList.add("animate-zoom");
	setTimeout(() => {
		salary_message.classList.remove("opacity-0");
		salary_message.classList.add("animate-zoom");
	}, 500);
	setTimeout(() => {
		salary.classList.remove("opacity-0");
		salary.classList.add("animate-zoom");
	}, 900);
	salary_message.innerText = `${fullName.value} عزیز حقوق شما در این ماه با احتساب ${tax.value} درصد مالیات برابر است با :`;
	if (select.value === "diploma") {
		salary_message.classList.replace("text-[15px]", "text-2xl");
		salary_box.classList.replace("justify-evenly", "justify-center");
		salary.style = "display: none";
		salary.classList.remove("mr-20");
		if (fullName.value === "") {
			salary_message.innerText = "لطفا نام و نام خانوادگی خود را وارد کنید.";
		} else if (hw.value === "") {
			salary_message.innerText = "لطفا ساعت کاری خود را تعیین کنید.";
		} else if (tax.value === "") {
			salary_message.innerText = "لطفا نرخ مالیات را وارد کنید.";
		} else {
			salary_message.classList.replace("text-2xl", "text-[15px]");
			salary.removeAttribute("style");
			salary.classList.add("mr-20");
			salary.innerText = `${splitter(
				String(hw.value * 500000 - hw.value * 500000 * (tax.value / 100))
			)} تومان`;
		}
	} else if (select.value === "bachelor") {
		salary_message.classList.replace("text-[15px]", "text-2xl");
		salary_box.classList.replace("justify-evenly", "justify-center");
		salary.style = "display: none";
		salary.classList.remove("mr-20");
		if (fullName.value === "") {
			salary_message.innerText = "لطفا نام و نام خانوادگی خود را وارد کنید.";
		} else if (hw.value === "") {
			salary_message.innerText = "لطفا ساعت کاری خود را تعیین کنید.";
		} else if (tax.value === "") {
			salary_message.innerText = "لطفا نرخ مالیات را وارد کنید.";
		} else {
			salary_message.classList.replace("text-2xl", "text-[15px]");
			salary.removeAttribute("style");
			salary.classList.add("mr-20");
			salary.innerText = `${splitter(
				String(hw.value * 700000 - hw.value * 700000 * (tax.value / 100))
			)} تومان`;
		}
	} else if (select.value === "master") {
		salary_message.classList.replace("text-[15px]", "text-2xl");
		salary_box.classList.replace("justify-evenly", "justify-center");
		salary.style = "display: none";
		salary.classList.remove("mr-20");
		if (fullName.value === "") {
			salary_message.innerText = "لطفا نام و نام خانوادگی خود را وارد کنید.";
		} else if (hw.value === "") {
			salary_message.innerText = "لطفا ساعت کاری خود را تعیین کنید.";
		} else if (tax.value === "") {
			salary_message.innerText = "لطفا نرخ مالیات را وارد کنید.";
		} else {
			salary_message.classList.replace("text-2xl", "text-[15px]");
			salary.removeAttribute("style");
			salary.classList.add("mr-20");
			salary.innerText = `${splitter(
				String(hw.value * 900000 - hw.value * 900000 * (tax.value / 100))
			)} تومان`;
		}
	} else if (select.value === "phd") {
		salary_message.classList.replace("text-[15px]", "text-2xl");
		salary_box.classList.replace("justify-evenly", "justify-center");
		salary.style = "display: none";
		salary.classList.remove("mr-20");
		if (fullName.value === "") {
			salary_message.innerText = "لطفا نام و نام خانوادگی خود را وارد کنید.";
		} else if (hw.value === "") {
			salary_message.innerText = "لطفا ساعت کاری خود را تعیین کنید.";
		} else if (tax.value === "") {
			salary_message.innerText = "لطفا نرخ مالیات را وارد کنید.";
		} else {
			salary_message.classList.replace("text-2xl", "text-[15px]");
			salary.removeAttribute("style");
			salary.classList.add("mr-20");
			salary.innerText = `${splitter(
				String(hw.value * 1100000 - hw.value * 1100000 * (tax.value / 100))
			)} تومان`;
		}
	} else {
		salary_message.classList.replace("text-[15px]", "text-2xl");
		salary_box.classList.replace("justify-evenly", "justify-center");
		salary.style = "display: none";
		salary.classList.remove("mr-20");
		if (fullName.value === "") {
			salary_message.innerText = "لطفا نام و نام خانوادگی خود را وارد کنید.";
		} else if (hw.value === "") {
			salary_message.innerText = "لطفا ساعت کاری خود را تعیین کنید.";
		} else if (tax.value === "") {
			salary_message.innerText = "لطفا نرخ مالیات را وارد کنید.";
		} else {
			salary_message.innerText = "لطفا یک مدرک تحصیلی را انتخاب کنید.";
		}
	}
});
