using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using lab_final.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace lab_final.Controllers
{

    public class MonitoreoController : Controller
    {
        public DeviceContext hola = new DeviceContext();
        public List<Dispositivo> Dispositivos = new List<Dispositivo>();
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public JsonResult settemperatura([FromBody] Dispositivo dispositivo)
        {
            SqlCommand cmd = new SqlCommand("UPDATE Dispositivos SET Medida_Actual ="+ dispositivo.medida_actual+", Factualizar = 1 WHERE Nombre = "+"'"+dispositivo.nombre+"'",datos);
            cmd.CommandType = CommandType.Text;
            datos.Open();
            cmd.ExecuteNonQuery();
            datos.Close();
            return Json(1234);
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
                Dispositivos.Add(new Dispositivo() { dispositivoid=reader.GetInt64(0),nombre=reader.GetString(1),medida_actual=reader.GetInt32(2),limite_maximo=reader.GetInt32(3),limite_minimo=reader.GetInt32(4),factualizar=reader.GetInt32(5) });
            }
            datos.Close();
            return Json(Dispositivos);
        }
        [HttpPost]
        public JsonResult bajarflag([FromBody] Dispositivo dispositivo)
        {
            SqlCommand cmd = new SqlCommand("UPDATE Dispositivos SET Factualizar =0 WHERE Dispositivoid ="+dispositivo.dispositivoid, datos);
            cmd.CommandType = CommandType.Text;
            datos.Open();
            cmd.ExecuteNonQuery();
            datos.Close();
            return Json(1234);
        }

    }

}
