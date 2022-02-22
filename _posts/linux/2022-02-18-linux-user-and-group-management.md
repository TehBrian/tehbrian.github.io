---
layout: post
title: "Linux User and Group Management"
description: "Cheatsheet for user and group management."
category: Linux
---

## user types

| type                   | description                                           |
| :--------------------- | :---------------------------------------------------- |
| root user              | can log into the system; uid of 0; created by default |
| system or service user | cannot log into the system; uid of -1000 (or -500)    |
| standard user          | can log into the system; uid of +1000 (or +500)       |

## group types

| type                    | description            |
| :---------------------- | :--------------------- |
| system or service group | gid of -1000 (or -500) |
| standard group          | gid of +1000 (or +500) |

## commands

| command         | description                                                                            |
| :-------------- | :------------------------------------------------------------------------------------- |
| `useradd`       | add user                                                                               |
| `usermod`       | modify user                                                                            |
| `userdel`       | delete user                                                                            |
| `passwd`        | set user password                                                                      |
|                 |                                                                                        |
| `groupadd`      | add group                                                                              |
| `groupmod`      | modify group                                                                           |
| `groupdel`      | delete group                                                                           |
| `gpasswd`       | set group password                                                                     |
|                 |                                                                                        |
| `finger <user>` | display user info                                                                      |
| `id <user>`     | display user id                                                                        |
| `groups <user>` | display user groups                                                                    |
|                 |                                                                                        |
| `pwck`          | verify integrity of `/etc/passwd` and `/etc/shadow`                                    |
| `pwconv`        | migrate `/etc/passwd` passwords to `/etc/shadow`<br>can also fix `/etc/shadow` errors  |
| `pwunconv`      | undoes migration; removes `/etc/shadow`                                                |
|                 |                                                                                        |
| `grpck`         | verify integrity of `/etc/group` and `/etc/gshadow`                                    |
| `grpconv`       | migrate `/etc/group` passwords to `/etc/gshadow`<br>can also fix `/etc/gshadow` errors |
| `grpunconv`     | undoes migration; removes `/etc/gshadow`                                               |

## files and directories

| directory/file         | purpose                                             |
| :--------------------- | :-------------------------------------------------- |
| `/etc/passwd`          | stores user accounts                                |
| `/etc/shadow`          | stores user passwords                               |
|                        |                                                     |
| `/etc/group`           | stores group accounts                               |
| `/etc/gshadow`         | stores group passwords                              |
|                        |                                                     |
| `/etc/default/useradd` | defines default values for useradd                  |
| `/etc/login.defs`      | defines id configuration, /etc/shadow configuration |
| `/etc/skel/`           | defines template for new user home directories      |

<!-- https://allinworld99.blogspot.com/2015/02/hide-url-hover-over-link-hide-link-from.html -->
<!-- https://www.geeksforgeeks.org/how-to-open-url-in-new-tab-using-javascript/ -->

(hate the inconsistency? me too.
<a target="_blank" href="javascript:void(0)" onclick="window.open('https\:\/\/www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')">click here</a>
to sign a petition to rename `/etc/passwd` to `/etc/user` and `/etc/shadow` to
`/etc/ushadow`, and have the old files be symlinks of the renamed files to
maintain compatibility.)

## symbol meanings in password fields

| symbol      | indicates that                          |
| :---------- | :-------------------------------------- |
| `!` or `!!` | the account is locked                   |
| `$`         | the entry is an encrypted password      |
| `*`         | the account is a system user account    |
| `x`         | the password is stored in `/etc/shadow` |
