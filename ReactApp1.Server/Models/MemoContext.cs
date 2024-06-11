using Microsoft.EntityFrameworkCore;
namespace ReactApp1.Server.Models
{
    public class MemoContext: DbContext
    {
        public MemoContext(DbContextOptions<MemoContext> options)
            : base(options)
        {

        }

        public DbSet<Memo> Memo { get; set; }
    }
}
