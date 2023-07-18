# Career Workshop

Career workshops provide educational opportunities for students to learn about key career readiness skills and topics.

## To run JavaScript code

To run the above JavaScript code in Visual Studio Code (VSCode), you can follow these steps:

1. Open Visual Studio Code.
2. Create a new file and save it with a `.js` extension, e.g., `script.js`.
3. Copy and paste the JavaScript code into the `script.js` file.

Next, you have several options to run the code:

**Option 1: Using the integrated terminal in VSCode:**

1. Open the integrated terminal in Visual Studio Code by pressing `Ctrl + ` ` (backtick)`, or go to `View` > `Terminal` from the menu.
2. Make sure you are in the same directory where the `script.js` file is located.
3. Run the Node.js runtime by typing `node script.js` in the terminal and press `Enter`.
4. The output will be displayed in the terminal, and in this case, an alert dialog will not appear since VSCode does not support a graphical user interface for JavaScript alerts.

**Option 2: Using a browser:**

1. Open the `script.js` file in Visual Studio Code.
2. Right-click anywhere in the editor and choose `Open with Live Server`. If you don't have the "Live Server" extension installed, you can install it from the VSCode Extension Marketplace.
3. A browser window will open with the output of the JavaScript code, and you should see an alert with the value `2`.

Remember that the provided code snippet includes an `alert` function, which displays a dialog box in a web browser. It won't work directly in the Node.js environment, which is why Option 2 relies on a browser. If you want to test the `bar()` function in a Node.js environment, you should remove the `alert` function and use `console.log` instead to see the output in the terminal.
