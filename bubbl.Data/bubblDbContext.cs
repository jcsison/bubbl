using bubbl.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace bubbl.Data {
    public class bubblDbContext : DbContext {
        public bubblDbContext() { }
        public bubblDbContext(DbContextOptions options) : base(options) { }
        public virtual DbSet<Content> Contents { get; set; }
        public virtual DbSet<User> Users { get; set; }
    }
}
