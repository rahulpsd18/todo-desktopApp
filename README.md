# Todo
A simple desktop app to help manage your day-to-day tasks.

![screenshot](https://dl.dropboxusercontent.com/s/9wd8ekz1cbwewuc/todoScreenshots.png)
# Overview
This is a web based app made with jQuery, HTML and CSS wrapped in [electron](http://electron.atom.io/) to create a native desktop application for all platforms.
It can retain the list stored in it even if it is closed or the system is restarted.

# Getting Started
### Prerequisites
It is assumed that you have [npm](https://www.npmjs.com/) package manager installed on your system.

###Installation
The necessary dependencies are in the package.json file so just run `npm install` to get them installed.

###Running the application
To start the appication, simply run `npm start`

# Creating an executable package
- To create a windows executable package, run `npm run build:win` and once successfully completed, check dist/todo-win32-x64

# Task List
- [x] ~~Use [electron-packager](https://github.com/electron-userland/electron-packager) to create a executable file~~
- [ ] Create a single setup package to help distribute the app
- [ ] Create taskbar accessible version using [menubar](https://github.com/maxogden/menubar)
- [ ] Add electron-packager build script for other platforms