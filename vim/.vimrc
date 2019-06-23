"==================================================================		
"			~My vimrc~
"==================================================================		
":PluginInstall
let g:ackprg = "ag --vimgrep"

"Vundle setup
set nocompatible " Required by vundle
filetype off     " Required by vundle

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

" let Vundle manage Vundle, required
Plugin 'gmarik/Vundle.vim'
"Plugin 'lervag/vim-latex'

Plugin 'tpope/vim-rails'  
" Plugin 'VundleVim/Vundle.vim'
Plugin 'ctrlpvim/ctrlp.vim'
Plugin 'tpope/vim-surround'
Plugin 'tpope/vim-repeat'
Plugin 'tpope/vim-commentary'
Plugin 'thoughtbot/vim-rspec'
Plugin 'tpope/vim-dispatch' "allows you to test in the window with vim-rspec
Plugin 'vim-ruby/vim-ruby'
Plugin 'tomasr/molokai'
Plugin 'joshdick/onedark.vim'
Plugin 'leafgarland/typescript-vim'
Plugin 'nikvdp/ejs-syntax'
Plugin 'digitaltoad/vim-jade'
Plugin 'editorconfig/editorconfig-vim'
Plugin 'isRuslan/vim-es6'
Plugin 'rking/ag.vim'
Plugin 'mileszs/ack.vim'

" All of your Plugins must be added before the following line
call vundle#end()            " required
filetype plugin indent on    " required

autocmd BufNewFile * silent! 0r $VIMHOME/templates/%:e.tpl


imap jk <esc>
imap kj <esc>
imap <Tab> <C-P>

set relativenumber
set number
set tabstop=2
set softtabstop=2
set shiftwidth=2
set expandtab
set nobackup
set clipboard=unnamed
set incsearch
set hlsearch
set ignorecase
set splitbelow
set splitright
set mousehide
set backspace=indent,eol,start
set guioptions-=R
set guioptions-=L

"leader comands
let mapleader = "\;"

" notes

" all notes
nmap <leader>na :tabedit /Users/natelipp/code/dotfiles/notes <cr> 

" technology notes
nmap <leader>np :tabedit /Users/natelipp/code/dotfiles/notes/technologies/python <cr> 
nmap <leader>nh :tabedit /Users/natelipp/code/dotfiles/notes/technologies/html <cr> 
nmap <leader>nj :tabedit /Users/natelipp/code/dotfiles/notes/technologies/javascript <cr> 
nmap <leader>nn :tabedit /Users/natelipp/code/dotfiles/notes/technologies/node <cr> 
nmap <leader>ns :tabedit /Users/natelipp/code/dotfiles/notes/technologies/sql <cr> 
nmap <leader>nm :tabedit /Users/natelipp/code/dotfiles/notes/technologies/mac <cr> 
nmap <leader>nv :tabedit /Users/natelipp/code/dotfiles/notes/technologies/various <cr> 

" general notes
nmap <leader>nr :tabedit /Users/natelipp/code/dotfiles/notes/general/rithm <cr> 
nmap <leader>ne :tabedit /Users/natelipp/code/dotfiles/notes/general/emails <cr> 

" mvim
nmap <leader>vr :tabedit ~/.vimrc<cr>
nmap <leader>mn :tabedit /Users/natelipp/code/dotfiles/vim/notes <cr> 
nmap <leader>ms :so %<cr>
nmap <leader>mr :set number relativenumber!<cr>

" general
nmap <leader>s :w<cr>
nmap <leader>h :noh<cr>
nmap <leader>op :!open % -a Google\ Chrome<cr>
nmap <leader>q :q<cr>
nmap <leader>w :q<cr>
nmap <leader>b :Explore <cr>

"insert into mvim
nmap <space> <Insert> <esc>l
nmap <leader>pc <Insert>console.log(<esc>
nmap <leader>pd <Insert>import pdb; pdb.set_trace()<esc>

"split window with current parent directory file path 
nmap <leader>v :vnew <C-r>=escape(expand("%:p:h"), ' ') . '/'<cr>
nmap <leader>vv :split <C-r>=escape(expand("%:p:h"), ' ') . '/'<cr>
nmap <leader>t :tabe <C-r>=escape(expand("%:p:h"), ' ') . '/'<cr>

"copy all lines in a file
  "nmap <leader>co ggVG*y
nmap <leader>ca :w !pbcopy<cr>


"shortcuts to files (old)
" nmap <leader>cs :tabedit /Users/natelipp/code/dotfiles/vim/notes <cr> 
" nmap <leader>fc :tabedit /Users/natelipp/code/dotfiles/vim/cheatsheets/
" nmap <leader>fs :tabedit /Users/natelipp/code/dotfiles/skeletons <cr>

"can be used for testing 
nmap <leader>T :w<cr>:call RunCurrentSpecFile()<cr>

"indent all lines in the file
nmap <leader>id mmgg=G`m

"move tabs right and left
nmap <leader>gg :tabm +1<cr> 
nmap <leader>tt :tabm -1<cr>

"Move up and down by visible lines if current line is wrapped
nmap j gj
nmap k gk

"Searching
" nmap <leader>f :vimgrep // **/*.js
" :vimgrep -R --exclude-dir=node_modules /App/ .  
" nmap <leader>ff :grep -R --exclude-dir=node_modules --exclude-dir=build --exclude=\yarn.lock --exclude=\package-lock.json* '' .<left><left><left>
nmap <leader>ff :grep -R --exclude-dir=node_modules --exclude-dir=build --exclude=\yarn.lock --exclude=\package-lock.json* '' ./.<left><left><left><left><left>
nmap <leader>oo :copen<cr> 
"See a list of all files (after grep)"
nmap <leader>n :cnext<cr>
"Cycle through the next file file (after grep)"
nmap <leader>p :cprevious<cr>
"Cycle through the previous file (after grep)"



"auto comands
autocmd Filetype help nnoremap <buffer> q :q<CR>

"Command aliases for typoed commands (accidentally holding shift too long)
command! Q q " Bind :Q to :q

" Colors
colorscheme onedark
let g:airline_theme='onedark'

" Make CtrlP use ag for listing the files. Way faster and no useless files.
" let g:ctrlp_user_command = 'ag %s -l --hidden --nocolor -g ""'
" let g:ctrlp_user_command = 'ag %s -l --nocolor -g ""'
let g:ctrlp_use_caching = 0
let g:ycm_path_to_python_interpreter = '/usr/bin/python'
let g:netrw_banner = 0

