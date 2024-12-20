---
title: 'TCP #1: Sockets'
date: '2024-12-19'
author: 'Ahmad Agah'
---

# TCP #1: Sockets

In this lab, we will identify the default network services that are exposed using a variety of Linux tools. Begin by SSH'ing into your Ubuntu course VM.

## `ss`, `netstat`

`ss` and `netstat` are equivalent Linux utilities that allow a system administrator to perform an inventory of network resources being used on a machine.

### Task 1: Find a Command to List All TCP Sockets in LISTEN State

Using ChatGPT, find a single command and its command-line flags that, when executed, lists all TCP sockets in a `LISTEN` state on an IPv4 address, showing the program that is using it. Note that you will need to run this command using `sudo` since administrator privileges are required to list resources being used by other programs.

Take a screenshot of the prompt and the command that ChatGPT generates.

### Task 2: Run the Command

Run the command using `sudo` and take a screenshot of the output to include in your lab notebook.

### Examine the "Local Address" Field

Servers such as `ssh` and `nginx` typically listen on `0.0.0.0` to accept connections from any interface on the machine (`INADDR_ANY` when specifying a socket). Servers intended for local access listen only on the loopback interface `localhost...` or `127.0.0.1` (`INADDR_LOOPBACK`), as described in `man 7 ip`. 

Following the address, the port number that each socket is listening on is specified. The port is given either as a name for well-known services as listed in `/etc/services` (e.g., `http` for port 80) or as a number.

- **List a service that can be contacted from any interface on the machine.**
- **List a service that can only be contacted by local processes.**

### Task 3: Login to `linux.cs.pdx.edu`

Run the command again, but do not use `sudo` as this is a machine managed by CAT. Include a screenshot of the output.

- **List the services that this machine provides for external access.**
