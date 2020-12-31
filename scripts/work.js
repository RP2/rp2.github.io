
//expand filter
function filter() {
    $("#close").toggleClass("rotate");
    $("#list").fadeToggle();
};

//reset filter
function resetFilter() {
    $("#list #dev, #list #design, #list #video").fadeTo("fast", 1, "swing");
    $("#workList .dev, #workList .design, #workList .video").fadeTo("fast", 1, "swing")
    filter()
}

//call filter and reset filter function
$("#filter").click(function () {
    if ($("#filter #close").hasClass("rotate")) {
        resetFilter()
    } else {
        filter()
    }
});

//close filters when hovering list
$("#workList").mouseenter(function () {
    if ($("#filter #close").hasClass("rotate")) {
        filter()
    }
});

//toggle filter opacity
$("#dev, #design, #video").click(function () {
    if (this.id == "dev") {
        $("#dev").fadeTo("fast", 1, "swing")
        $("#design, #video").fadeTo("fast", .5, "swing")
        $(".dev").fadeTo("fast", 1, "swing")
        $(".design, .video").fadeTo("fast", .5, "swing")
    } else if (this.id == "design") {
        $("#dev, #video").fadeTo("fast", .5, "swing")
        $("#design").fadeTo("fast", 1, "swing")
        $(".dev, .video").fadeTo("fast", .5, "swing")
        $(".design").fadeTo("fast", 1, "swing")
    } else if (this.id == "video") {
        $("#dev, #design").fadeTo("fast", .5, "swing")
        $("#video").fadeTo("fast", 1, "swing")
        $(".dev, .design").fadeTo("fast", .5, "swing")
        $(".video").fadeTo("fast", 1, "swing")
    }
});

//show preview
$("#workList li a").hover(function () {
    switch (this.id) {
        case "brutal":
            $("#brutal-img").fadeToggle(75, "swing")
            break;
        case "music":
            $("#music-img").fadeToggle(75, "swing")
            break;
        case "primo":
            $("#primo-img").fadeToggle(75, "swing")
            break;
        case "shred":
            $("#shred-img").fadeToggle(75, "swing")
            break;
        case "mulder":
            $("#mulder-img").fadeToggle(75, "swing")
            break;
        case "egweb":
            $("#egweb-img").fadeToggle(75, "swing")
            break;
        case "anime":
            $("#anime-img").fadeToggle(75, "swing")
            break;
        case "rdesign":
            $("#rdesign-img").fadeToggle(75, "swing")
            break;
        case "rogue":
            $("#rogue-img").fadeToggle(75, "swing")
            break;
        case "resn":
            $("#resn-img").fadeToggle(75, "swing")
            break;
        case "98":
            $("#98-img").fadeToggle(75, "swing")
            break;
        case "memory":
            $("#memory-img").fadeToggle(75, "swing")
            break;
        case "catalyst":
            $("#catalyst-img").fadeToggle(75, "swing")
            break;
    }
});