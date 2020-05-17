
using System;
using Microsoft.EntityFrameworkCore;
namespace api.Models
{
    public class Produto
    {

        public long id { get; set; }
    
        public double preco { get; set; }

        public string lugarPartida { get; set; }

        public string lugarChegada { get; set; }

        public string urlImg {get;set;}

        public DateTime dataPartida {get;set;}
        

    }
}