#!/bin/bash
dpkg-scanpackages ../repo/ ../repo/
bzip2 -fks Packages
gzip -f Packages
gpg -abs -o Release.gpg Release
