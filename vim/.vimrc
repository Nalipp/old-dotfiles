"==================================================================		
"			~My vimrc~
"==================================================================		

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
nmap <leader>vr :tabedit ~/.vimrc<cr>
nmap <leader>oo :source $MYVIMRC<cr>
nmap <leader>s :w<cr>
nmap <leader>h :noh<cr>
nmap <leader>op :!open % -a Google\ Chrome<cr>
nmap <leader>q :q<cr>
nmap <leader>w :q<cr>
nmap <leader>nn :set nonu norelativenumber<cr>
nmap <leader>yn :set number relativenumber<cr>
nmap <leader>l <Insert>console.log(<esc>
nmap <leader>f <Insert>function <Insert>
nmap <space> <Insert> <esc>l

"copy all lines in a file
  "nmap <leader>co ggVG*y
nmap <leader>ca :w !pbcopy<cr>

"split window with current parent directory file path 
nmap <leader>v :vnew <C-r>=escape(expand("%:p:h"), ' ') . '/'<cr>
nmap <leader>vv :split <C-r>=escape(expand("%:p:h"), ' ') . '/'<cr>
nmap <leader>t :tabe <C-r>=escape(expand("%:p:h"), ' ') . '/'<cr>

"shortcuts to files
nmap <leader>cs :tabedit /Users/natelipp/code/dotfiles/vim/cheatsheets/vim <cr> 
nmap <leader>fc :tabedit /Users/natelipp/code/dotfiles/vim/cheatsheets/
nmap <leader>fs :tabedit /Users/natelipp/code/dotfiles/vim/skeletons/

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
