using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using lab_final.Models;
using Microsoft.AspNetCore.Mvc;

namespace lab_final.Controllers
{
    public class DispoController : Controller
    {
        public SqlConnection datos = new SqlConnection("Data Source=SQL5102.site4now.net;Initial Catalog=db_a7aa70_dispositivos;User Id=db_a7aa70_dispositivos_admin;Password=Juancamiloxd12");
        public List<Dispositivo> Dispositivos = new List<Dispositivo>();
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public JsonResult actualizar()
        {
            SqlCommand cmd = new SqlCommand("SELECT * FROM Dispositivos", datos);
            cmd.CommandType = CommandType.Text;
            datos.Open();
            SqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                Dispositivos.Add(new Dispositivo() { dispositivoid = reader.GetInt64(0), nombre = reader.GetString(1), medida_actual = reader.GetInt32(2), limite_maximo = reader.GetInt32(3), limite_minimo = reader.GetInt32(4), factualizar = reader.GetInt32(5) });
            }
            datos.Close();
            return Json(Dispositivos);
        }
    }
}