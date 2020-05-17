using Microsoft.EntityFrameworkCore;

using api.Models;

namespace api
{
    public class ViagensContext : DbContext
    {
        
        public ViagensContext(DbContextOptions<ViagensContext> options): base(options){

        }

        public DbSet<Produto> produtos {get;set;}

    }
}