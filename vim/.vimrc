"==================================================================
"			~My vimrc~
"==================================================================		

  "Vundle setup
 set nocompatible              " be iMproved, required
 filetype off                  " required

  "set the runtime path to include Vundle and initialize
 set rtp+=~/.vim/bundle/Vundle.vim
 call vundle#begin()

 Plugin 'tpope/vim-rails'  
 Plugin 'VundleVim/Vundle.vim'
 Plugin 'ctrlpvim/ctrlp.vim'

 imap jk <esc>
 imap kj <esc>

 imap <C-s> <esc>:w<CR>

 set number
 set tabstop=2

  "leader comands
 let mapleader = "\<Space>"
 nmap <leader>vr :tabedit ~/.vimrc<cr>
 nmap <leader>co ggVG*y
 nmap <leader>so :source $MYVIMRC<cr>
 nmap <leader>v :vnew <C-r>=escape(expand("%:p:h"), ' ') . '/'<cr>
 nmap <leader>cs :tabedit /Users/natelipp/code/vim/cheatsheet <cr>
  "Move up and down by visible lines if current line is wrapped
 nmap j gj
 nmap k gk
 	 
  "auto comands
 autocmd Filetype help nnoremap <buffer> q :q<CR>

  "Command aliases for typoed commands (accidentally holding shift too long)
 command! Q q " Bind :Q to :q

