---
date: 2006-09-04 14:47:00 -05:00
excerpt: For a laugh, I decided to try out a Linux distro on my old 700 Mhz G3 iBook (mid-2002 revision).
layout: post
title: Ubuntu on an iBook
---

[![Ubuntu on an iBook](http://static.flickr.com/82/234103760_5043ae5fe8_m.jpg)](http://flickr.com/photos/jgarber/234103760/)

For a laugh, I decided to try out a Linux distro on my old 700 Mhz G3 iBook (mid-2002 revision). I’d heard Ubuntu 6.06.1 was pretty good as far as PowerPC-based distros go, so I gave it a shot.

I started out by wiping OSX off of the machine using an old Panther installation disc to format the drive using HFS+ (apparently HFS+ Journaled is not the way to go for UNIX).

Installing Ubuntu was relatively painless, it didn’t ask too many questions (unlike some other Linux distros I’ve played with in the past). The first challenge after installation was fixing the X11 config to support the iBook’s display. The system was defaulting to 640×480. It took some digging around, but I found [this thread on the Ubuntu forums](http://www.ubuntuforums.org/showthread.php?t=231279) that had some helpful info on correcting the problem. A few `chmod`s later and X11 was behaving itself at 1024×768.

That left the problems of random lockups and configuring the wireless. The random lockups seem to be a problem a lot of people are running into, and the solution usually involves recompiling the kernel (something I have no interest in doing). DHCP also seemed to be an issue, but I’m not sure if that had to do with the hardware, software, or our network. Static IP worked fine, though. Running system update has thus far \*knock on wood\* solved the random lockups.

Still no luck on the wireless though, if anyone has any suggestions on how to get this to work, please let me know. The fixes I’ve found online all involve Broadcom cards/chipsets/whatever, which I don’t think my Airport card is using.

So far this has just been a random experiment and I likely won’t stick to it. The unfortunate thing about using Linux is the rather large barrier to entry. The support forums online (at least as far as I have found) are all written for experts, not newbies like myself. I _want_ to learn more about Linux, so if anyone has any tips out there on any of the problems described above, please let me know!