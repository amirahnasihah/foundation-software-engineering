# Command Prompt: Basic Commands (CMD)

- [Command Prompt: Basic Commands (CMD)](#command-prompt-basic-commands-cmd)
  - [1. Lists Installed Drivers (driverquery)](#1-lists-installed-drivers-driverquery)
  - [2. Networking Information (ipconfig)](#2-networking-information-ipconfig)
  - [3. List Hardware Information (systeminfo)](#3-list-hardware-information-systeminfo)
  - [4. Check if Server is Reachable (ping)](#4-check-if-server-is-reachable-ping)
  - [5. Scan and Repare System Files (sfc /scannow)](#5-scan-and-repare-system-files-sfc-scannow)
  - [6. List Currently Running Tusk (tasklist)](#6-list-currently-running-tusk-tasklist)
  - [7. Change the Directory / Folder (cd)](#7-change-the-directory--folder-cd)
  - [8. Change the Drive](#8-change-the-drive)
  - [9. Create a New Directory / Folder (mkdir)](#9-create-a-new-directory--folder-mkdir)
  - [10. Clear Screen (cls)](#10-clear-screen-cls)
  - [11.  List of open port & IP (netstat -an)](#11--list-of-open-port--ip-netstat--an)
  - [12. systeminfo](#12-systeminfo)
  - [13. Escaping Incorrect Command](#13-escaping-incorrect-command)
  - [14. Reusing the previous command](#14-reusing-the-previous-command)
  - [15. Clearing the command](#15-clearing-the-command)
  - [16. Renaming Folder/ File](#16-renaming-folder-file)
  - [Others - npm / pip (troubleshoot)](#others---npm--pip-troubleshoot)
    - [1. pip is broken (Python)](#1-pip-is-broken-python)
  - [Basic Command Line - simple for total beginner](#basic-command-line---simple-for-total-beginner)
    - [File System Navigation](#file-system-navigation)
    - [Make File Changes](#make-file-changes)
    - [Continuing Commands](#continuing-commands)

A quick guide to basic cmd commands.

>NOTE: Command applies to Windows 10, Windows 8.1 and Windows 7.
>pic-ref: [dev.to/iamprogrammmer](https://dev.to/iamprogrammmer/command-prompt-basic-commands-you-should-know-cmd-4aj) and others

## 1. Lists Installed Drivers (driverquery)

Drivers are very important in your PC. Missing a important driver can hamper your work. Use `driverquery` command to get a full list of installed drivers in your pc. It’ll help you to find the missing driver.
Use `driverquery -v` to obtain more information.

![driverquery](https://res.cloudinary.com/practicaldev/image/fetch/s--LnPMi688--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/tjpr1x4fgqep3z7l93sf.png)

[back to top](#command-prompt-basic-commands-cmd)

## 2. Networking Information (ipconfig)

`ipconfig` will provide you your ip address along with your local network.

![ipconfig](https://res.cloudinary.com/practicaldev/image/fetch/s--qU43Pxdk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/b25ywxeg8i84nq2gmmj8.png)

[back to top](#command-prompt-basic-commands-cmd)

## 3. List Hardware Information (systeminfo)

Use `systeminfo` to know very basic information about your pc’s hardware, like – motherboard, processor & ram.
![systeminfo](https://res.cloudinary.com/practicaldev/image/fetch/s--Tq4jgXDE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/xbaprl2kz64ai0z5a9hw.png)

[back to top](#command-prompt-basic-commands-cmd)

## 4. Check if Server is Reachable (ping)

The `ping` command sends packets of data to a specific IP address (or domain) on a network and then lets you know how long it took to transmit that data and get a response.
If you get the response properly then the connection of the device is working properly if not a particular server or your online connection is blocking communication between your computer and another. `ping <ip or domain>`

![ping](https://res.cloudinary.com/practicaldev/image/fetch/s--_4yX9CXs--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/qf4sw2kr47feh93jgdta.png)

`pathping`, is a more advanced version of ping that's useful if there are multiple routers between your PC and the device you're testing. Like ping, you use this command by typing pathping followed by the IP address, but unlike ping, pathping also relays some information about the route the test packets take.

![pathping](https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2018/11/pathpingcmd.png?q=50&fit=crop&w=767&dpr=1.5)

[back to top](#command-prompt-basic-commands-cmd)

## 5. Scan and Repare System Files (sfc /scannow)

`sfc /scannow` will scan and repare windown system files. But you must be run the console as an administrator.

[back to top](#command-prompt-basic-commands-cmd)

## 6. List Currently Running Tusk (tasklist)

Use `tasklist` to get currant list of all tasks running on your pc.
Use `tasklist -v` to obtain more detail of all tasks.

![tasklist](https://res.cloudinary.com/practicaldev/image/fetch/s--cDD8ZytB--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/516ygeqkylizl3ufg0eq.png)

[back to top](#command-prompt-basic-commands-cmd)

## 7. Change the Directory / Folder (cd)

Use `cd\` to go to the top of the directory tree.

![cd\]('https://res.cloudinary.com/practicaldev/image/fetch/s--XhirZ32p--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/r9k702zom2ayt899r2pr.png')

If you need to go to a specific folder from this drive run the command `CD Folder`. The subfolders must be separated by a backslash character: `\`

![CD Folder](https://res.cloudinary.com/practicaldev/image/fetch/s--iwVbytg1--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/greiwlwgblsqj48yk7yj.png)

Use the `cd..` command to go one folder up.

![cd...](https://res.cloudinary.com/practicaldev/image/fetch/s--Vc9D-CL---/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/kv2e6x224v8n84ui3nos.png)

[back to top](#command-prompt-basic-commands-cmd)

## 8. Change the Drive

If you wanted to change the drive from “C:” to “D:”, type `d:` and then press Enter.

![d:](https://res.cloudinary.com/practicaldev/image/fetch/s--itkXaIys--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/g4uesslq8xzeoydibcnd.png)

If you are now on the “D:” drive and you want to go to the Windows folder from the”C:” drive, you should type `cd /d C:\Windows` and press Enter.

![cd /d C:\Windows](https://res.cloudinary.com/practicaldev/image/fetch/s--Zu1-LiAE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/rp21nn17ildz1bktt6vf.png)

[back to top](#command-prompt-basic-commands-cmd)

## 9. Create a New Directory / Folder (mkdir)

You can make a new folder using the `mkdir` (Make Directory) command. The syntax of these commands is `mkdir Folder`.

![mkdir](https://res.cloudinary.com/practicaldev/image/fetch/s--a5JA2ail--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/ep065flpskw8umjamm6i.png)

To test if it worked, use the `dir` command. The newly created folder appears in the list.

![dir](https://res.cloudinary.com/practicaldev/image/fetch/s--NVLsoNlR--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/pg51iqq6vptzc21tclnx.png)

If you are working on the “C:” drive and you want to create a new folder in “D:,” called Google, type `mkdir d:\Google` and then press Enter.

![mkdir d:\xx](https://res.cloudinary.com/practicaldev/image/fetch/s--BegyH7Xp--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/5qij2k0kkel53kklkade.png)

[back to top](#command-prompt-basic-commands-cmd)

## 10. Clear Screen (cls)

To clear the existing commands in prompts type `cls` and press Enter.

[back to top](#command-prompt-basic-commands-cmd)

## 11.  List of open port & IP (netstat -an)

Entering the command `netstat -an` will provide you with a list of currently open ports and related IP addresses. This command will also tell you what state the port is in; listening, established, or closed.

This is a great command for when you're trying to troubleshoot devices connected to your PC or when you fear a Trojan infected your system and you're trying to locate a malicious connection.

![netstat](https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2018/11/netstatcmd.png?q=50&fit=crop&w=767&dpr=1.5)

[back to top](#command-prompt-basic-commands-cmd)

## 12. systeminfo

This command will give you a detailed configuration overview of your computer. The list covers your operating system and hardware. For example, you can look up the original Windows installation date, the last boot time, your BIOS version, total and available memory, installed hotfixes, network card configurations, and more.

![systeminfo](https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2018/11/systeminfocmd.png?q=50&fit=crop&w=767&dpr=1.5)

Use `systeminfo /s` followed by the hostname of a computer on your local network, to remotely grab the information for that system. This may require additional syntax elements for the domain, user name, and password, like this:

```sys
systeminfo /s [host_name] /u [domain]\[user_name] /p [user_password]
```

[back to top](#command-prompt-basic-commands-cmd)

## 13. Escaping Incorrect Command

if you try to type the correct command again, it won’t run. At this point, you will need the magic cure for a situation like this: `Ctrl + C`. Try pressing `Ctrl + C`, and your command line will back to normal again (Sometimes it would require pressing the shortcut twice). This shortcut key will save you from most of the troubles when using the command line.

[back to top](#command-prompt-basic-commands-cmd)

## 14. Reusing the previous command

You can quick re-type the previous commands by “pressing the up arrow”. Press once means the previous command. Press twice means getting the previous previous command.

[back to top](#command-prompt-basic-commands-cmd)

## 15. Clearing the command

Sometimes after working for a while, the command line interface is full of commands, results and mess. You can clean it up using the clear command and press enter.

[back to top](#command-prompt-basic-commands-cmd)

## 16. Renaming Folder/ File

Rename-Item cmdlet is used to rename a folder by passing the path of the folder to be renamed and target name. Type the following command in PowerShell ISE Console:

```sys
Rename-Item D:\temp\Test D:\temp\Test1
```

You can see the Test directory as Test1 directory now. There should not be another folder with same name already in the temp directory otherwise PowerShell command will fail.

[back to top](#command-prompt-basic-commands-cmd)

## Others - npm / pip (troubleshoot)

### 1. pip is broken (Python)

Anaconda pip install mpyc Error pip-script.py is not present

I want to install mpyc package using anaconda command prompt CMD. but it returns this error, How to address to solve such an issue. Error 'D:\Ananconda3\Scripts\pip-script.py' is not present. (base) C:\Users\dell>pip install mpyc Script file 'D:\Ananconda3\Scripts\pip-script.py' is not present.

pip is broken in your Anaconda Version. Try,with (base) active as you have now.

```sys
conda install --force-reinstall pip
# Or
python -m ensurepip --default-pip
```

> NOTE: this command is for python/anaconda uses only

[back to top](#command-prompt-basic-commands-cmd)

## Basic Command Line - simple for total beginner

### File System Navigation

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

### Make File Changes

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

### Continuing Commands

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
