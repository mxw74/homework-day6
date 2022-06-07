const disappear = (element) => {
    console.log("element was clicked and the ID is: " +element.id);
    document.getElementById(element.id).style.display="none"
}