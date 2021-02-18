using System.IO;
using System;

namespace Dotnet_webapi{
    public class Music{
        public String FirstSong{get;set;}
        public String SecondSong{get;set;}
        public String ThirdSong{get;set;}
        public Music(){
            if(File.Exists("firstSong.txt")){
                FirstSong=File.ReadAllText("firstSong.txt");
            }
            else{
                FirstSong="??";
            }
            if(File.Exists("secondSong.txt")){
                SecondSong=File.ReadAllText("secondSong.txt");
            }
            else{
                SecondSong="??";
            }
            if(File.Exists("thirdSong.txt")){
                ThirdSong=File.ReadAllText("thirdSong.txt");
            }
            else{
                ThirdSong="??";
            }
         }
    }
}