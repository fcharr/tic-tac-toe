function start()
{
         tic_tac_toe = new tic_tac_toe(' ', new Array('X', 'O'), artificial_intelligence);

         tic_tac_toe.display_choice =
         function(token, row, collumn)
         {
                  if(row < 3 && collumn < 3)
                  {
                     document.getElementById('tic-tac-toe-' + (row + 1) + (collumn + 1)).value = token;
                     if(token != this.blank_token)
                     {
                        document.getElementById('tic-tac-toe-' + (row + 1) + (collumn + 1)).onclick = function() {};
                     }
                     else
                     {
                        eval("document.getElementById('tic-tac-toe-' + (row + 1) + (collumn + 1)).onclick = function() {tic_tac_toe.human_turn(" + row + ", " + collumn + ")}");
                     }
                  }
         }

         document.getElementById('restart').onclick = function() {tic_tac_toe.start();};

         for(var row = 0; row < 3; row++)
         for(var collumn = 0; collumn < 3; collumn++)
         {
             eval("document.getElementById('tic-tac-toe-' + (row + 1) + (collumn + 1)).onclick = function() {tic_tac_toe.human_turn(" + row + ", " + collumn + ")}");
         }

         tic_tac_toe.declare_human_win = function() 
         {
             this.clear();
             
             this.display_choice('Y', 0, 0);
             this.display_choice('O', 0, 1);
             this.display_choice('U', 0, 2);
             
             this.display_choice('W', 2, 0);
             this.display_choice('I', 2, 1);
             this.display_choice('N', 2, 2);
         };

         tic_tac_toe.declare_computer_win = function() 
         {
             this.clear();
             this.display_choice('Y', 0, 0);
             this.display_choice('O', 0, 1);
             this.display_choice('U', 0, 2);
             
             this.display_choice('L', 1, 0);
             this.display_choice('O', 1, 1);
             
             this.display_choice('S', 2, 1);
             this.display_choice('E', 2, 2);
         };

         tic_tac_toe.declare_tie = function() 
         {
             this.clear();
             this.display_choice('T', 1, 0);
             this.display_choice('I', 1, 1);
             this.display_choice('E', 1, 2);
         };

         document.getElementById('replay').onclick = function() {tic_tac_toe.debug_my_last_move(document.getElementById('levels').value);};

         tic_tac_toe.start();
}