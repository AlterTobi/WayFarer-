# WayFarer+
A Chromium extension to add more functionality to NianticLab's Wayfarer

Adds a set of custom tools for Wayfarer that make reviewing and monitoring your nominations easier!

General discussion, GitHubless bug reporting and feature requests: https://t.me/joinchat/B1ceWQ5xy3wT03gjkq0Few

Documentation and users guide: https://github.com/MrJPGames/WayFarer-/wiki

[![Available for Google Chrome](https://developer.chrome.com/webstore/images/ChromeWebStore_BadgeWBorder_v2_206x58.png)](https://chrome.google.com/webstore/detail/wayfarer%20/fnhddfgebnmokicfdfgcdcdhcmgkeglc)
[![Available for Firefox](https://addons.cdn.mozilla.net/static/img/addons-buttons/AMO-button_1.png)](https://addons.mozilla.org/en-US/firefox/addon/wayfarerplus/)

Other browser support?
- Brave, Vivaldi and other chromium browsers that use the Google Chrome Web Store for installing extensions.
- Opera's review process is VERY slow. Install via the Google Chrome Web Store instead using "Add to Opera"! [More info](https://addons.opera.com/en/extensions/details/install-chrome-extensions/)
- Firefox for Android, is technically supported, but I do not test for compatability.
- Edge will be supported when the Chromium builds become the official stable release. When running beta builds you can also install from the Chrome Web Store after enabling instalation from other stores.
- Safari is unsupported.

Changelog
---
1.11.1:
- Ppresets can now also automatically fill the WhatIsIt box (Only presets made with 1.11.1 or later)
- Export/Import function added for "Open In" maps configuration
- Slight improvements to the extended profile for Ingress agents
- Nominations Stats widget should be more accurate in it's unlock dates
- Default Intel map settings should work with more IITC versions now
- Reset "Open In" configuration option added

1.11:
- Custom map support added for "Open In". Now you can add any third party map to the Open In dropdown! (Defaults are Google Maps, Ingress Intel and OSM, these can be removed if desired!)
- Compact view made more compact
- Recon Badge offset added (For those who's stats got reset)
- New Settings design to make the increasing number of settings more managable
- You can now scroll through duplicates using keyboard controls
- Reject edit bug fixed (You cannot normally reject an edit, would not work but could cause unusual/dangerous behavior)

1.10.2:
- Keyboard control to What is it box (using arrow keys) (#68)
- Stars no longer misplaced in some languages (#66)
- Nominations Stats widget truly fixed for Firefox
- Nomination Stats can be reloaded (useful after setting if a nomination was from PoGo/Ingress to see the stats with that new info you provided)
- Agreement total % of reviews is now shown in Extended Profile Stats (#67)
- Duplicate window auto opening can now be disabled (#69)

1.10.1:
- Fix issue where space bar would quick submit even when typing in a text box
- Fix Dark Mode after a new website update broke it
- Typo fixes in settings
- Quick Reject fix for Firefox
- Temporary fix for Nominations Stats Widget on Firefox

1.10:
- Submit timer, lock the submit button for X seconds so you don't review "too quick"
- Quick Submit Button, one click to submit and continue to next review
- Space bar can be used to submit review and go to next while using keyboard controls (with or without Quick Submit button on)
- Better module loading, also fixes some Firefox only bugs.
- Transparent pin, location pin can be made transparent and will become invisable on hover. Useful to see if the Wayspot is on the satellite underneath the pin.
- Ingress Recon Badge progress now displayed on profile (If extended profile stats are on AND ingress account is turned on)
- Extended profile is now customizable: Off, Aproximation and Facts Only. Aproximation can only be used if you have always had your agreements count towards upgrades. Facts only uses data that is accurate even if some of your agreements did not count towards upgrades and off disables the extend stats feature.
- Some fixes for bugs and glitches

1.9.3:
- Fixed compact card view (after site update) Thanks to @GoncaloCdM for notifying me about the issue!
- Hide navigation bar in expanded card view when on smaller yet without navigation bar compatible screen! (Suggested by @GoncaloCdM)

1.9.2:
- Fix extended profile stats (now works with updated profile page)
- Nomination marking will now also work if it broke in 1.9 (1.9.1 only worked if you hadn't activated the function on 1.9)


1.9.1:
- Fix #53 & #54, -> Nomination marking now initializes correctly and can be used! Duplicate marking no longer interferes with text entry!

1.9:
- Added expanded card view
- Added review presets (use at OWN RISK!)
- Added RNG option to review presets to possibly lower pattern detection odds (still OWN RISK!)
- Quickly get to reject reasons while using keyboard controls by pressing 0 at any point during the review.
- Dark mode fixes needed after recent site update
- whatCtrl is now hooked on review page and accessible to other modules. (Hooked event: WFPWhatCtrlHooked)
- Refactor making modifcations more modular and expandable for future and 3rd party development

1.8.2:
- Cleaned up original location highlight during location edits as per #37
- Fixed issues caused when using Dark Mode on the recently changes edit review page

1.8.1:
- Typo fixes by @DragonBallZeke & @tehstone
- Fixes issues: #21, #27 and #31

1.8:
- Added S2 Cell support to Nominations and Review (new and edit)
- Compact Card View (for low-res devices or better overview on high-res) by @GoncaloCdM
- Current location is marked during location edit review
- Map buttons are always present during edit review (including edits with no location edit)
- Made translation buttons clearer and smaller
- First option in duplicates is autoselected
- Duplicates can now be done with keyboard (if it's the autoselected one)
- Made settings more understandable by adding addition info where possibly needed
- Duplicate strip can now be scrolled through using the scroll wheel
- Extended Nomination stats are now more accurate, taking withdrawls into account (which according to niantic should grant you a nomination back if you withdraw it in the 13 day period)
- Improvements and fixes to Dark Mode

1.7.2
- Map buttons are now an option for the review page as well
- Edit agreements on profile has been changed to Other agreements as my assumtions seem to have been wrong, and there is no clear origin for these agreements.

1.7.1:
- More advanced Nominations stat widget. Now displays upcomming dates on which new Nominations will unlock.
- Google Maps and Itel Map buttons added to Nominations page
- Progress percentage next to user icon in header added
- Description in a review can be clicked to google it like the title is by default
- Lat Long coordinates now displayed above the map on Nominations page
- Small fixes to the Dark Theme on the Nominations page

1.7:
- Added reviewing with the keyboard (including numpad). Press the number corresponding to the star rating. Use the arrow keys to naviaget manually between the options. Press enter to submit and to continue to the next review. Use backspace to go back in rejction menus or go home after finishing a review.
- 20m and 40m circles are now also available for the nominations page
- Default zoom level for the "Location Accuracy" map now configurable in settings. A more zoomed in map can be useful when using the keyboard to review to avoid having to use the mouse to zoom in, which is often needed.
- Improved settings backend, should solve a bug in previous versions when updating to a version with new settings.

1.6.1
- Fixes #6 #7 and #8
- Removes any libary from being required (result: smaller file size, possibly better performace but only extremly slight)
- Further improvements to the Dark Mode

1.6:
- Ctrl-less zooming on maps (review, nominations)
- Made translation buttons less ambiguous. Should no longer be confused with emoji in description or title! Fixes #5
- Settings pop-up now looks in style with settings from Wayfarer (Dark Mode)
- Map circles improvements. Map resets now retain the circles!
- Small general code improvements

1.5:
- Added 20m and 40m circles to both map views on the review page. These allow you to see if other portals are too close, and from what area players of Ingress, Wizards Unite and Pokemon Go can access the PoI (if it were to appear in those games)
- Extended profile stats have been added. Now adds total agreement count and edit agreement count.
- Added translation buttons to review page. Allows you to quickly go to Google Translate and translate the Title, Description or supporting statement of a nomination.
- Some more Dark Theme fixes were implemented.

1.4:
- Added nomination page stats widget. See how many nominations you have accepted, rejected, in queue, in voting etc. This widget also allows you to see how many nominations you can still make (in Ingress Prime ONLY currently) and how many days until new nominations become available to you.
- Fixed Dark Theme issue in nominations page (sort order arrow was invisable)

1.3:
- Added customizability, any WayFarer+ function or modification can now be turned on or off!
- Minor tweaks and improvements to the Dark Theme

1.2:
- Added warning when reviewing when a Wayspot candidate is too close to an already existing Wayspot to ever go live in any current Niantic game.
- Minor tweaks and improvements to the Dark Theme

1.1.1:
- Added review timer to review page. Let's the user know how much time they have left before Wayfarer no longer allows you to review the nomination.

1.1:
- Added StreetView review preview to Nominations page. 

1.0 - 1.0.2:
- Initial releases. 
- Basic Dark Theme was implemented.
