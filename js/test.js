$("#save").on("click", function () {

    const key = $("#key").val();
    const value = $("#memo").val();
    console.log(key);
    console.log(value);

    localStorage.setItem(key, value);
    const html = `
    <li>
        <span>${key}</span>
        <span>${value}</span>
    </li>`

    $("#list").append(html);

    $("#key").val("");
    $("#memo").val("");

});

$("#clear").on('click', function () {
    localStorage.clear();
    $("#list").empty();
});

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    console.log(key);

    const value = localStorage.getItem(key);

    const html = `
    <li>
        <span>${key}</span>
        <span>${value}</span>
    </li>`

    $("#list").append(html);
}