# Basic Command Line

- [Basic Command Line](#basic-command-line)
  - [File System Navigation](#file-system-navigation)
  - [Make File Changes](#make-file-changes)
  - [Continuing Commands](#continuing-commands)
  - [Others](#others)
  - [Escaping Incorrect Command](#escaping-incorrect-command)
  - [Reusing the previous command](#reusing-the-previous-command)
  - [Clearing the command](#clearing-the-command)
  - [Renaming Folder/ File](#renaming-folder-file)

## File System Navigation

```sys
Command: pwd
Example: pwd
Feature: current directory
```

```sys
Command: mkdir
Example: mkdir foldername
Feature: create a directory
```

```sys
Command: ls
Example: ls
Feature: list out all the files
```

```sys
Command: cd
Example: cd xx (.. means one layer up)
Feature: change directory
```

```sys
Command: touch
Example: touch file.txt (non-Windows) / ni file.txt (Windows Powershell)
Feature: create a file
```

[back to top](#command-prompt-basic-commands-cmd)

## Make File Changes

```sys
Command: cp
Example: cp file.txt file-copy.txt
Feature: Copy a file
```

```sys
Command: mv
Example: mv file.txt ../
Feature: Move a file
```

```sys
Command: rm
Example: rm file.txt
Feature: remove something
```

[back to top](#command-prompt-basic-commands-cmd)

## Continuing Commands

```sys
Command: cat
Example: cat file.txt
Feature: Read a file
```

```sys
Command: echo / write
Example: echo “Hello World!”
Feature: Print something
```

[back to top](#command-prompt-basic-commands-cmd)

## Others

## Escaping Incorrect Command

if you try to type the correct command again, it won’t run. At this point, you will need the magic cure for a situation like this: `Ctrl + C`. Try pressing `Ctrl + C`, and your command line will back to normal again (Sometimes it would require pressing the shortcut twice). This shortcut key will save you from most of the troubles when using the command line.

[back to top](#command-prompt-basic-commands-cmd)

## Reusing the previous command

You can quick re-type the previous commands by “pressing the up arrow”. Press once means the previous command. Press twice means getting the previous previous command.

[back to top](#command-prompt-basic-commands-cmd)

## Clearing the command

Sometimes after working for a while, the command line interface is full of commands, results and mess. You can clean it up using the clear command and press enter.

[back to top](#command-prompt-basic-commands-cmd)

## Renaming Folder/ File

Rename-Item cmdlet is used to rename a folder by passing the path of the folder to be renamed and target name. Type the following command in PowerShell ISE Console:

```sys
Rename-Item D:\temp\Test D:\temp\Test1
```

You can see the Test directory as Test1 directory now. There should not be another folder with same name already in the temp directory otherwise PowerShell command will fail.
