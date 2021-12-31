
lesson1(1 - 5) : create repo 3al pc w nheto 3al Remote(github)
lesson2(v6): bi 2ellak kif tsir men demen el team(contributor)
lesson3(v7):git configuration
lesson4(v8):how to create public key and use it in the same github account(impo)(ssh)
lesson5(v9):kif bta3mul repo bel local w teb3ato 3a remote(ssh)
LESSON6(V10): Learn Pull Request With Real Examples - BI 3ALEMNA
KIF NE5OD REPO MEN 5ILEL EL FORK W N3ADEL 3LAYA W NEB3AT EL TA3DIL
3N TAR2I PULL REQUEST LAL TEAM W HUUWE BI WE2EF BYA3MELA MERGE
W BTSIR ENTA EL BATAL

3mol github account
download git aw cmder(full)


repositry: mustawda3 el code,
    --i5tisara repo w kell project fi 3ando repo.
        ex: cocacolo maser


            - Branch yaane fare3 aw kesem
ex:cairo branch

local repo yaane pc taba3ak
remote repo yaane github

Commit: bas t7ell bug aw ta3mul(snapshot or checkpoint in ur local repo)
shi lezem ta3mul degre baada commit, hye btkun lessa ma nba3tet wala hassala shi
bas gayarna w 3adalna


clone yaane nase5
    (repo from remote) or(remote from repo)

push[upload local changes to remote]
pull[you pull changes from remote repo to your local]
pull request[tell other about your changes to pull it from local to remote]

pull and pull request fiah reject

touch ammur.txt     bte5la2 file

STep by STep
1_mnfta7 el Git Bash ma7al ma badna ne5la2 el Folder li badna
na3mul fi Clone.

2 - mkdir ESEMelFOLDER         ex: mkdir My_Github    bte5la2 folder

3 - cd My_Github              mnfut 3le lal folder

4 - git clone https://github.com/omarsaade/Git_Coure.git
mnjib el link hayda men el repo / Code / HTTPS

5 - dir        fawetna 3le

6 - cd Git_Course
mnetkob hed cd esem el repo

7 - dir
btfawetne 3a readme.md

8 - mne5la2 belll My_Github folder(file.js aw file.html)aw
aw folder mnsami w mnhet bi albo(file.js aw file.html 3ade..)


9 - git status
lama nektob hayde bt2elna el 7ale el 3ame,
    shu sayer hala2 wshu baad lezem yenzed aw bado idafe 3aL STAGE


10 - git add.   // aw git add *  (yaane kell el melafet)
hayde btzid el folder w btheto bel staging area
working Directory - (git add.)> staging area - (git commit)> local repo-- >
    -(git push)> remote repo
fina n2ul kamen git add folder\lo.js lo.html


note: (iza ana tlla3et file aw folder 3al stage bel galat w habeb shila
yaane habeb a3mela unstage bi basata, la ne3teber 3amalna create
la file esmo index.css bel folder(my - Github / Git - course) w 3melnelo(git add index.css)
hon ana bkun tala3to, tayeb ana lezem shilo hala2 men baad ma tala3to, yaane an3emlo unstage
kif ? mnektob git resest head index.css byetla3 men el stage


11 - git commit - m"text" aw  git commit
ba3da mnektob text w ba3da, mnef2os(shift ك)sawa w mnektob wq w ba3den mnetla3
sar kelshi bel local repo

12 - note
git branch
bi 3arrfak kell el branches el mawjude 3andak bel local

kif mnjib remote name ? li ana lah wade 3le ? =>>> git remote - v

The 'U' means the files are 'untracked',
    and the 'M' means the files have been 'modified'.
git add - A - To add all the files to the staging area.









??????////

    video 6

////Tadrib la tari2et shegel el team ma3 b3d////
new repo from a new github account
mnfut 3a repo w mne5od el link men repo par example
github.com//elzerocourse/our.project
mnjibo w mnefta7 tene account yalle esmo omar w mnhot link jaweto w byefta7
hala2 badna ne5od project men omar(person men el team)
fork yaanne nes5a men el project for u to commit ur proposed changes to
delelte


hala2 ana ka omar 3ayez kun wahad men el team taba3 el project yalle 3amlo el, 34
m3alem mudir el sherke par ex soooo kif ?
    bi fut saheb el shereke 3a account el github taba3o w bi fut 3al project
settings logo
Collaborators
bytetla3lo metel search bar, byetktob fia esem eli bado yfut 3a team(mwazaf)
add collaborator
hon bikun nba3at invitation 3an tari2 el email lal mwazaf, bi fut huwe 3al
email w bi ballesh accepto accepto
accept invitation
w hik sar wahad men el team

hala2 fina ne5od link taba3 repo
git clone HTTPS bel folder
mnfut 3le bel cd ourproject
w mnna3melo git add. / git commit - m"bla bla" / git push / git status

w hik bikun nzed el Malaf 3ande w 3ando w 3and kell el team
yaane 3al centralize server



hala2 iza hab el sha5es el jdid ydif bel projet w bifut 3le w bi na2e
create new file
bi sammi osama.txt
description
Commit new file
hala2 bi bayen 3nd el call bel remote repo
bas baad ma bayan ka folder bel pc..esseh 3al repo

git status
git pull origin
he li faw2na bta3mul git fetch ma3 git merge sawa
baad ma na3mla bi bayen el osama.txt bel folder
TAMEMO
GIT STATUS
HIK BTSIR TA3REF TECHTEGEL MA3 EL TEAM



VIDEO 7
LEARN GIT Gonfiguration
BUG YAANE 5ALAL BARMAJI
touch new_file.txt    bte5la2 new file


1
git config - l
btjib list bi kelshi config

git help congif
byefta7 kelshi 5aso bel config
fia kelshi khaso bel doc

n3adel 3al COnfig ?? kif

ex
useremail
 git config--global user.email(hayde get)
value of useremail
git config--global user.email "o@gmail.com"(hayde set)

b3den  git config--global user.email(btbayenn)



username
git config--global user.name "osamaelzero"(hayde set)
b3den  git config--global user.name(btbayenn)


git config - l       lanshuf
metel git status


git config - l--show - origin
bt2elak btjib el config taba3ak men wen, men aya file

git config--global--unset user.name
hayde btshil shi men el config metel, user.name


git config - l

$$$$$$ $$$$$ 555555
git config--global--edit
tari2et ta3dil jdide 3al config yalle byefta7 auto el editor
w mnzid hawde
[color "status"]added = green  changed = red bold  untracked = magenta bold
[color "branch"]remote = yellow


video 8
public key or ssh key


fik testa3mlo la ma tektob kelll marra el username wel password
public key huwe shi generel..mesh bas lal github

1  ssh - keygen - t rsa - b 4096 - C "megamobile2267@gmail.com"
create public key

2   password or passphrase
fi 3alem el unix ma bi 5alik hata thsuf el password lama tektob
yaane ra2e3

cat ~/.shh/id_rsa.pub

$ cat / c / Users / omar /.ssh / id_rsa.pub
 


cat bi geble mu7atawa aya file bta3ti esmo
bya3tine mu7atwa lama yetla3 mne5do kelo w mnruh 3a githubaccount
settings
 ssh and GPG keys
new SSH key
title: My Home PC
key: mnheto paste
add ssh key

defna el key khalas
ssh - T git @github.com

/////////////
vIDEO 9
mnfut 3al document
mneftah bash bel documents
mkdir repos
cd repos
git init(hidden file)
touch index.html
git status
git add index.html
git commit - m "created the Main File"


mnfut 3a wesbite github w mne5la2 new repo
msami course

git remote add origin git @github.com: megamobile111 / Courso.git
git push - u origin master







video10
Learn Pull Request With Real Examples
https://youtu.be/n43bagVuJPU




VIDEO11
GIT ALIEAS
AMAZING
how ? lets see

git config--global alias.st status
git st   badal    git status

iza fi space
git config--global alias.br branch
git br   badfal git branch


clear kelshi maktub bel page
git config--global alias.cm "commit -m"

git cm ""    badal    git commit - m "create "



///
3ana
git config--global--edit
bi albo kell el haraket


git alias list bi google
lama badak tsami ya habibi..lezem ykun harfen metel ex
br     branch
lesh ? hata ma ta3mul tadarob ma3 shi shagle w tel3an abuna




video12

///////////1111 bi 3almak kif te5la2 branch w ta3mela merge ma3 el master w terja3 teb3ata lal origin (github)
learn about merging and branching
git branch
bi warjike el branch li 3ndak

git branch Scroll
create la new branch esmo Scroll


git branch



iza badak truh 3ala el branch li enta ancha2to bt2elo
git checkout Scroll

git checkout master
iza badak terja3 lal master marra tenye


delete branch
git branch - d Scroll

d   safe delete
    D  Force delete


        git branch
----------------------------


    git checkout - b Dev - feature
byensho2 el branch w bi ruh 3le

git branch - m Development
rename branch

touch index.html
git add index.html
git commit - m "testing branch"



git checkout master
git merge Development

bta33mul merge la deveeeeee and masteroo


git branch - d Development
bte7zof el branch

git push origin master
nerfa3 el master 3a github
////////////////////////////////////////////////


22222222222 hala2 he bteb3at degre 3al github bidun ma na3mul merge yaane b3akes li fo2

git checkout - b Scroll
touch main.js
git status
git add main.js 
git commit - m "New Exper"
git checkout master
git branch - D Scroll

git status
git checkout - b Scroll
touch main.css
git add main.css
git commit - m "Testing delete"
git checkout master
git branch - d Scroll
git checkout Scroll
git push origin Scroll

mna3mull pull request w merge men el link li3al cmd w kelshi kmele 3a github w khalsin

///////////////////////////////////////////////
video13
mastering stash part 1
stash yaane ma5ba2


touch about.html
ls   list files    btfut btwarjik shu 3andak
git status
echo "hello world" > aboyt.readme.txt
git status
git add *
    git status
git stash
git status
ls
touch main.js
git add main.js
git commit - m "added the main js File"
git status
git push origin master

git status
git stash list         bya3tik stash el id taba3o 0
git stash pop
git stash list
git commit - m "added files from stash"
git status
git push origin master
git status
///////////////////////////



video14
git mastering stash part 2
touch m.txt
git add m.txt
git st
git stash                 bt5abi bi ma7al bas
touch x.txt
git add x.txt


git stash list                bta3tik list bel stasheyet  
git stash
git stash list
touch osx.txt
git add osx.txt
git stash save "OSX Test"             bet save 3al ma3lumet ka details
git stash list
ls


git stash pop                            btshil ekher stash 3amalneha
git stash list
git st


git stash save "OSX Text"
git stash list
git stash apply                          bta3mul apply la ekher stash bas bedall mawjude bel saved
git stash list
git commit - m "OSX Test"
git push origin master
git st
git stash list
git stash pop stash @{ 2}                     btna2e aya badak tzaher men 5ilel el id
git st


git stash list                             
git commit - m "M Text"
git push origin master
git stash list
git stash drop stash @{ 1}                   btshila lal stash li 3anda id 1
git stash show                             bi warjik shufi jawet el stash li msayav el a5ir tab3an cz mafi id
git st
git stash list

touch elz.doc
git add elz.doc
git stash
git stash list
git stash show stash @{ 0}
git stash list
git stash clear             byem7i kelshi stashet ketbon  hadertak
gist stash list


///////////////////////////////
video 15
retore ana clean


ls 
git st
touch new.txt
git st
git add new.txt
git st

git restore--staged new.txt 
git st
code new.txt
git st
git st
fi tgayer men vsc
touch new2.txt
git st
git st
git restore--staged *
    git st
git clean - n             show file
touch new3.txt
git clean - n
git add new2.txt  
git clean - n
git clean - f
git st

/////////////////////////////////////////

video16
Resetting the head
7azef commit mabadak yehon aw ma 3ezton aw fion galat


touch good.txt
git st
git add good.txt
git commit - m "The good Commit"
git push origin main
touch bad.txt
git add bad.txt
git commit - m "the bad commit"
git push origin main

git log
headdddddd taba3 el branch
fi tari2a la tehzof w kell commit elo hash
lezem n5ali hash commit mawjud w hik mnehzof li ablo


q

git reset--hard hash###
pointerrrr yaane
git push origin main--force
git log
git reset--hard hashhh yalle bade ehzof li ablo
git push origin main--force














