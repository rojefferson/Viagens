

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Collections.Generic;
using api.Models;

namespace api.Controllers
{

    [ApiController]
    [Route("[Controller]")]
    public class ViagemController : Controller
    {
        private readonly  ViagensContext _viagemContext;

        public ViagemController(ViagensContext v){
            this._viagemContext = v;
        }
 
        [HttpGet("teste")]
        public string teste(){
           return  "testasdasdasdasdae";
       } 

        [HttpGet("Produtos")]
        public List<Produto> produtos(){
            return _viagemContext.produtos.ToList();
        }



    }
}