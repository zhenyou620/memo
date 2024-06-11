using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactApp1.Server.Models;

namespace ReactApp1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MemosController : ControllerBase
    {
        private readonly MemoContext _context;

        public MemosController(MemoContext context)
        {
            _context = context;
        }

        // GET: api/Memos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Memo>>> GetMemo()
        {
            return await _context.Memo.ToListAsync();
        }

        // GET: api/Memos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Memo>> GetMemo(int id)
        {
            var memo = await _context.Memo.FindAsync(id);

            if (memo == null)
            {
                return NotFound();
            }

            return memo;
        }

        // PUT: api/Memos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMemo(int id, Memo memo)
        {
            if (id != memo.Id)
            {
                return BadRequest();
            }

            _context.Entry(memo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MemoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Memos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Memo>> PostMemo(Memo memo)
        {
            _context.Memo.Add(memo);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetMemo), new { id = memo.Id }, memo);
        }

        // DELETE: api/Memos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMemo(int id)
        {
            var memo = await _context.Memo.FindAsync(id);
            if (memo == null)
            {
                return NotFound();
            }

            _context.Memo.Remove(memo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MemoExists(int id)
        {
            return _context.Memo.Any(e => e.Id == id);
        }
    }
}
