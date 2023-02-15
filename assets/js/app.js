isAuthenticated = false;
commands = ["login", "about"]
$(function(){
    $("body").terminal(function(command){
        command = command.toLowerCase()
        if(command == "login"){
            if(isAuthenticated){
                this.echo("すでにログインされています。");
            }else{
                this.echo("資格情報を入力してください。");
                this.echo("Username:colkirov");
                this.read("Password: ", str =>{
                    this.echo("ログインに成功しました。現在のログインユーザー：キーロフ大佐。");
                    isAuthenticated = true;
                    this.set_prompt("Kord-102@colkirov:~$ ", function (){
                       // do nothing
                    });
                });
            }
        }else if(command == "about"){
            if(!isAuthenticated){
                this.echo("アクセス権限がありません。");
                this.echo("ログインするには、loginコマンドを実行してください。")
            }else{
                this.echo("表示可能な文書：");
                this.echo("[a] シャーレ戦略軍について");
                this.echo("[b] 海軍戦力について");
                this.echo("[c] キーロフ大佐について");
                this.echo("文書を選択せよ");
                this.read("doc> ", str => {
                    if(str == "a"){
                        this.echo("シャーレ戦略軍司令部について");
                        this.echo("エデン条約以降の流れで結成された準軍事組織である。");
                        this.echo("陸海空軍の連携した作戦実行が基本となる。");
                        this.echo("第二次トリニティ＝ゲヘナ戦争の回避にも関わっているが、これは万が一戦争となれば艦隊が動けなくなることを懸念した評議会の判断によるものであり、決して善意によるものではなかった。");
                    }else{
                        this.echo("ファイルが見つかりません。");
                    }
                });
            }
        }else{
            this.echo(command + "は利用可能なコマンドではありません。");
            this.echo("利用可能なコマンド：");
            for (let i = 0; i < commands.length; i++) {
                this.echo(commands[i]);
            }
        }
    }, {
        greetings: "Schale Strategic Forces(SSF) Terminal Node Корд-102 (Kord-102) v1.21.1 \n ヘルプを表示するには、helpを入力してください。",
        prompt: "Kord-102@SSF:~$ ",
    });
});