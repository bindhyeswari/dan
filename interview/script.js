// JavaScript Document
var numberOfRows=20; // This number will be changed to control the number of rows

// code to launch data
document.addEventListener('DOMContentLoaded', function (){
    // get a reference to the td element containing the tabs
    var td_tabs = document.getElementById('dan_td_tabs');

    console.log(td_tabs.children);

    // assign a class name to keep track of which tab is active
    // class --> active_tab
    td_tabs.children[0].className += 'active_tab';
    console.log(td_tabs.children[0].classList); // Note that classlist is supported in IE 10 and above only
    // For browser compatibility, please use .className

    for ( var i = 0; i < td_tabs.children.length; i++ ) {
        var tab = td_tabs.children[i];
        console.log(tab);

        // handle a click event on the tabs
        tab.addEventListener('click', function (event){
            event.target.src = 'images/whiteTab.png';

            // check if any of the other tabs is active and make it inactive
            var children = event.target.parentNode.children;
            for ( var i = 0; i < children.length; i++ ) {
                if ( children[i].classList.contains('active_tab')) {
                    children[i].classList.remove('active_tab');
                    children[i].src = 'images/darkGrayTab.png';
                }
            }

            // assign the class tab_active to the current img
            event.target.classList.add('active_tab');

        });

        // handle a mouseenter event on the tabs
        tab.addEventListener('mouseenter', function (event){
            // check if the tab is not an active tab (the color of the active tab remains white, under all events)
            if (  !event.target.classList.contains('active_tab') ) {
                event.target.src = 'images/lightGrayTab.png';
            }
        });

        // handle a mouseout event on the tabs
        tab.addEventListener('mouseout', function (event){
            // check if the tab is not an active tab (the color of the active tab remains white, under all events)
            if (  !event.target.classList.contains('active_tab') ) {
                event.target.src = 'images/darkGrayTab.png';
            }
        });


    }

    var dan_table = document.getElementById('dan_table');
    var tddata = 'The big black dog jumped over the lazy fox.';
    // create table data
    for ( i = 0; i < numberOfRows; i++ ) {
        // create a tr element
        var tr = createAndAddElement('tr', 'repeater', '', dan_table);
        var index = createAndAddElement('td', '', i + 1, tr);
        var data = createAndAddElement('td', '', tddata, tr);
    }

});

// creates an element of specific type, adds class and text to it and appends it to parent
// returns a reference of the element for future use
function createAndAddElement(type_of_element, class_of_element, text, parent) {
    var element = document.createElement(type_of_element);
    element.className = class_of_element;
    element.innerHTML = text;
    parent.appendChild(element);
    return element;
}

