# Class-UI

_Robust and flexible user interface for web based applications._

**AIM OF THE PROJECT** : 
- [x] To create robust, flexible and effort reducing web user interface.
- [x] Reduce the usage of javascript.
- [x] To minimize the size of overall classui css and javascript files.
- [x] To provide polymorphic behaviour where applicable.


**IMPLEMENTATION** : 
*  COMPASS(which makes use of SASS)
*  JAVASCRIPT where mandatory.
   
**DESCRIPTION** :
  This project was mainly aimed at minimizing the use of JAVASCRIPT for user interface rendering, and make use of CSS wherever possible.
  We ensured the flexibility of creating one's own interface using Class-UI, at the same time providing utilities to reuse standard functionalities and hence decreasing one's worktime and preserving flexibility at the sametime.

**DESCRIPTION OF EACH FILE IN PARTIALS** :
* _reset.scss :
  * This file was used for normalizing the rendering of elements in all browsers with same styles.
* _dropdown.scss :
  * Dropdown functionality for a button, where a dropdown comes when clicked on a button that was properly configured for doing so.
* _grid.scss :
  * Grid layout functionality. Where the user can make the layout in the form of grid.
* _navbar.scss :
  * Navbar means, navigational bar at the top of page with custom elements for navigation across website. It is polymorphic in the sense that it provides navigational functionality inside any element with same markup but different rendering for different elements.
* _flash.scss :
  * A popup window like functionality where whole page becomes lightened and a window gets popped out with custom markum inside.
* _typography.scss :
  * Beautifying elements of html when applied with styles in typography.
* _utilities.scss :
  * Adds functionality of easy way of adding styles to elements such as holzontal padding padh and so on... Most commonly used styles are added into utilities section
* _well.scss :
  * Adds a beautiful padding and margin to element that was applied with well style with background of related style. Used for notifications like markup.
* _variables.scss :
  * By just modifying the variables in this file with appropriate colors and styles the whole user interface gets changed with different look!!!

**TODO** :
- [ ] ADD :  More styles and classes for typography.
- [ ] ADD :  Functionality of popover like in facebook site.
- [ ] ADD :  Responsive layout functionality for GRID system.
- [ ] ADD :  Add many more standard UI components.
