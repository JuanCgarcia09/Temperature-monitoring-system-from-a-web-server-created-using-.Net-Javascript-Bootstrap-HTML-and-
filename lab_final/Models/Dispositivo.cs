using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lab_final.Models
{
    public class Dispositivo
    {
        public long dispositivoid { get; set; }
        public string nombre { get; set; }
        public int medida_actual { get; set; }
        public int limite_maximo { get; set; }
        public int limite_minimo { get; set; }
        public int factualizar { get; set; }
    }
}
