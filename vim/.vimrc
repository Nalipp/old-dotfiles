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
Plugin 'nanotech/jellybeans.vim' "color scheme

" All of your Plugins must be added before the following line
call vundle#end()            " required
filetype plugin indent on    " required


imap jk <esc>
imap kj <esc>
imap <C-s> <esc>:w<CR>
set relativenumber
set number
set tabstop=2
set nobackup
set shiftwidth=2
set clipboard=unnamed
set incsearch
set hlsearch
set ignorecase
set splitbelow
set splitright

"leader comands
let mapleader = "\<Space>"
nmap <leader>vr :tabedit ~/.vimrc<cr>
"nmap <leader>co ggVG*y
nmap <leader>ca :%w !pbcopy<cr>
nmap <leader>so :source $MYVIMRC<cr>
nmap <leader>v :vnew <C-r>=escape(expand("%:p:h"), ' ') . '/'<cr>
nmap <leader>cs :tabedit /Users/natelipp/code/vim/cheatsheet <cr>
nmap <leader>t :w<cr>:call RunCurrentSpecFile()<cr>
nmap <leader>i mmgg=G`m
nmap <leader>cc :w !pbcopy<cr>
nmap <leader>h :noh<cr>

"Move up and down by visible lines if current line is wrapped
nmap j gj
nmap k gk

"auto comands
autocmd Filetype help nnoremap <buffer> q :q<CR>

"Command aliases for typoed commands (accidentally holding shift too long)
command! Q q " Bind :Q to :q

let g:molokai_original = 1

colorscheme jellybeans

" Make CtrlP use ag for listing the files. Way faster and no useless files.
" let g:ctrlp_user_command = 'ag %s -l --hidden --nocolor -g ""'
" let g:ctrlp_user_command = 'ag %s -l --nocolor -g ""'
let g:ctrlp_use_caching = 0
