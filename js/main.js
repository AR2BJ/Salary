// Selecting HTML elements using query selectors
let fullName = document.querySelector("input.fullName"); // Input for full name
let hw = document.querySelector("input.hw"); // Input for working hours
let tax = document.querySelector("input.tax"); // Input for tax rate
let select = document.querySelector("select.grade"); // Select dropdown for educational degree
let submit = document.querySelector("input.submit"); // Submit button
let salary_box = document.querySelector("div.salary_box"); // Container for displaying salary result
let salary_message = document.querySelector("p.salary_message"); // Paragraph for salary message
let salary = document.querySelector("p.salary"); // Paragraph for displaying calculated salary

// Function to format numbers with commas for thousands separators
function splitter(str) {
	str = str.replace(/\,/g, ""); // Remove existing commas
	let objRegexp = new RegExp("(-?[0-9]+)([0-9]{3})");

	// Add commas to the number
	while (objRegexp.test(str)) {
		str = str.replace(objRegexp, "$1,$2");
	}

	return str;
}

// Adding an event listener to the submit button
submit.addEventListener("click", () => {
	// Displaying the salary box with animation
	salary_box.classList.remove("opacity-0"); // Remove opacity class to make it visible
	salary_box.classList.add("animate-zoom"); // Add animation class for zoom effect

	// Animate the appearance of the salary message
	setTimeout(() => {
		salary_message.classList.remove("opacity-0");
		salary_message.classList.add("animate-zoom");
	}, 500); // Delay of 500ms for animation

	// Animate the appearance of the salary amount
	setTimeout(() => {
		salary.classList.remove("opacity-0");
		salary.classList.add("animate-zoom");
	}, 900); // Delay of 900ms for animation

	// Setting the salary message text based on the inputs
	salary_message.innerText = `${fullName.value} عزیز حقوق شما در این ماه با احتساب ${tax.value} درصد مالیات برابر است با :`;

	// Handling calculations based on the selected educational degree
	if (select.value === "diploma") {
		salary_message.classList.replace("text-[15px]", "text-2xl"); // Change font size for message
		salary_box.classList.replace("justify-evenly", "justify-center"); // Adjust box alignment
		salary.style = "display: none"; // Hide salary amount initially
		salary.classList.remove("mr-20");

		// Validating inputs and calculating the salary
		if (fullName.value === "") {
			salary_message.innerText = "لطفا نام و نام خانوادگی خود را وارد کنید."; // Validation message for name
		} else if (hw.value === "") {
			salary_message.innerText = "لطفا ساعت کاری خود را تعیین کنید."; // Validation message for hours
		} else if (tax.value === "") {
			salary_message.innerText = "لطفا نرخ مالیات را وارد کنید."; // Validation message for tax
		} else {
			salary_message.classList.replace("text-2xl", "text-[15px]"); // Reset font size for message
			salary.removeAttribute("style"); // Show salary amount
			salary.classList.add("mr-20");
			// Calculate and display the salary after tax
			salary.innerText = `${splitter(
				String(hw.value * 500000 - hw.value * 500000 * (tax.value / 100))
			)} تومان`;
		}
	} else if (select.value === "bachelor") {
		// Similar handling for bachelor degree
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
		// Similar handling for master degree
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
		// Similar handling for PhD degree
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
		// Handling case when no degree is selected
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
