isAuthenticated = false;
$(function(){
    $("body").terminal(function(command){
        command = command.toLowerCase()
        if(command == "login"){
            if(isAuthenticated){
                this.echo("すでにログインされています。");
            }else{
                this.echo("資格情報を入力してください。");
                this.echo("ユーザー名：colkirov");
                this.read("パスワード：", function (str) {
                    this.echo(str)
                });
            }
        }
    }, {
        greetings: "Schale Strategic Forces(SSF) Terminal Node Корд-102 (Kord-102) v1.21.1 \n ヘルプを表示するには、helpを入力してください。",
        prompt: "Kord-102@SSF:~$ ",
    });
});