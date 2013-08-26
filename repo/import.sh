#!/bin/bash
if [[ $UID -ne 0 ]]; then
    echo "$0 must be run as root"
    exit 1
fi
dpkg-scanpackages ./ /dev/null |gzip > Packages.gz
#gpg -abs -o Release.gpg Release
