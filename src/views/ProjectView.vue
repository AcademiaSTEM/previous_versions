<template>
  <div class="layout-main-container">
    <div class="layout-main">
      <header>
        <h4>Feria de conocimientos</h4>
        <h1>Proyectos finales</h1>
      </header>

      <Divider />
      <div class='project'>
        <p>
          Acá encontrarán los proyectos realizados por los
          estudiantes de la primera versión del año 2024.
        </p>
        <p>
          Para ejecutarlos, deberán copiar el código y
          ejecutarlo en alguna de las alternativas de Python online.
        </p>

        <Divider />

        <h4>Dado de la suerte del monopoly</h4>
        <p>Claudio M.</p>
        <div v-html="markdown.render(codigo_claudio_m)" />

        <h4>Adivina Adivinador</h4>
        <p>Catalina A. y Daniel Ó.</p>
        <div v-html="markdown.render(codigo_cata_dani)" />

        <h4>Calculadora de agua</h4>
        <p>Francisca M.</p>
        <div v-html="markdown.render(codigo_fran_m)" />

        <h4>Blackjack y Pelea de gallos</h4>
        <p>Augusto V.</p>
        <div v-html="markdown.render(codigo_hola_hola)" />

        <h4>Blackjack</h4>
        <p>Joaquín H.</p>
        <div v-html="markdown.render(codigo_joaco)" />

        <h4>Calculadora signos del zodiaco y su compatibilidad</h4>
        <p>Isidora R. y Micaela R.</p>
        <div v-html="markdown.render(codigo_isidora_mikaela)" />

        <h4>Trivia</h4>
        <p>Sofia R.</p>
        <div v-html="markdown.render(codigo_sofia_r)" />

        <h4>Ahorcado</h4>
        <p>Maite R.</p>
        <div v-html="markdown.render(codigo_maite)" />

        <h4>Rescate a MiauMiau</h4>
        <p>Samka R. y Sofia R.</p>
        <div v-html="markdown.render(codigo_samka_sofi)" />

        <h4>Apuestas futbol</h4>
        <p>Nicolás P.</p>
        <div v-html="markdown.render(codigo_nico)" />

        <h4>Panel de comandos</h4>
        <p>Javier P., Ethan M. y Simón H.</p>
        <div v-html="markdown.render(codigo_tripleta)" />

        <h4>Jugar cartas vs. el computador</h4>
        <p>Benjamín C.</p>
        <div v-html="markdown.render(codigo_benjamin)" />

        <h4>Correo y más funcionalidades</h4>
        <p>Homero A.</p>
        <a href="https://replit.com/@Homero-AugustoA/StemUC1">Código en Replit</a>
      </div>
    </div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it';
import highlight from '../utils/highlight';

export default {
  name: 'ProjectView',
  setup() {
    const markdown = new MarkdownIt({ highlight });
    return { markdown };
  },
  data() {
    return {
      codigo_claudio_m: `\`\`\`python
input("Bienvenido a los dados de la suerte, lo mas probable es que no ganes, y si ganas no servira de nada,vamos a jugar")

for palabra in("Las_reglas_son_simples: 1)Si_sacas_par_continuas_lanzando 2)Si_no_sacas_par_pierdes 3)El_que_logre_sacar_3_pares_seguidos_gana") .split(' '):
    print(palabra)
input()
input("Entendido, pues empezemos con los juegos mentales")
input()

from random import randint   #primer lanzamiento

numero_dado1 = randint(1,6)
numero_dado2 = randint(1,6)

print('El dado salio', numero_dado1,",",numero_dado2)
if numero_dado1==numero_dado2:
    print("Te toca lanzar de nuevo1")
    input()#funciona
   
    from random import randint #segundo lanzamiento

    numero_dado1 = randint(1,6)
    numero_dado2 = randint(1,6)
   
    print('El dado salio', numero_dado1,",",numero_dado2)
    if numero_dado1==numero_dado2:
        print("Te toca lanzar de nuevo, suertudo")
        input()#funciona x2
       
        from random import randint#tercer lanzamiento

        numero_dado1 = randint(1,6)
        numero_dado2 = randint(1,6)
   
        print('El dado salio', numero_dado1,",",numero_dado2)
        if numero_dado1==numero_dado2:
            print("Mucha suerte loco/a,te fuiste a la carcél,reinicia y pasa al siguiente jugador")
            input()
        else:
            print("Termino tu turno, reinicia y pasa al siguiente jugador")
            #funciona
    else:
        print("Termino tu turno, reinicia y pasa al siguiente jugador")

else:
    print("Termino tu turno, reinicia y pasa al siguiente jugador")
\`\`\``,
      codigo_cata_dani: `\`\`\`python
import time
from random import randint
numero_azar = randint(1, 20)
print(numero_azar)

print('¡ADIVINA ADIVINADOR! 🔮')
time.sleep(1)
print('Estoy pensando en un número del 1 al 20 y tienes que adivinar. ')
time.sleep(1)
print('Tienes solo 5 oportunidades...')

jugador = 0
veces = 0

while veces < 5:
    jugador = int(input('--> '))
    distancia = abs(numero_azar - jugador)
    if numero_azar == jugador:
        print('...')
        time.sleep(1)
        print('¡¡Ganaste!!')
        break
   
    elif distancia < 3:
        print('Caliente 🔥')
        veces = veces + 1
   
    elif distancia <= 7:
        print('Tibio ♨️')
        veces = veces + 1
   
    elif distancia > 7 and distancia < 9:
        print('Frio ❄️')
        veces = veces + 1
   
    elif distancia >= 9 :
        print('Congelado 🧊')
        veces = veces + 1

if veces == 5:
    print('...')
    time.sleep(1)
    print('Perdiste 😹😼')
\`\`\``,
      codigo_fran_m: `\`\`\`python
name=input('Bievenido/a, ¿cuál es tu nombre?')
print('Hola', name)
print('A continuación te realizaré un par de preguntas, para así calcular la cantidad de agua que deberías de ingerir a diario')
print('Todos los datos fueron obtenidos desde National Academies of Sciences, Engineering, and Medicine')

ready=input('¿Quieres continuar?')
ready_1 = 'Sí'
ready_2 = 'sí'
ready_3 = 'Si'
ready_4 = 'si'
continuar = True
if (ready == ready_1):
    print('¡Genial! Comencemos')
elif (ready == ready_2):
    print('¡Genial! Comencemos')
elif (ready == ready_3):
    print('¡Genial! Comencemos')
elif (ready == ready_4):
    print('¡Genial! Comencemos')
else:
    print('No hay problema, gracias por participar')
    continuar = False

if continuar == True:  
    print('Pregunta número 1')  
    masa=float(input('¿Cuál es tu masa corporal? (en kg)'))
   
    #pregunta 2
    print('Pregunta número 2')
    sexo=input('¿Tu sexo es femenino o masculino?')
    sexo_1 = 'femenino'
    sexo_11 = 'Femenino'
    sexo_2 = 'masculino'
    sexo_22 = 'Masculino'
   
    ingesta_diaria = masa * 35
    print('Tu ingesta diaria de agua, en ml, es de', ingesta_diaria)
\`\`\``,
      codigo_hola_hola: `\`\`\`python
import datetime
import time
from random import random, randint
m= 100
p= ''
cc1= randint(1,11)
cc2= randint(1,11)  
cc3= randint(1,11)
if cc2 == 11 and cc1 == 11:
    cc2=cc2-10
mtc=cc1 + cc2
cmc=(cc1, cc2)
cmc2=(cc1, cc2, cc3)
cj1= randint(1,11)
cj2= randint(1,11)
cj3= randint(1,11)
if cj2 == 11 and cj1 == 11:
    cj2=cj2-10
mtj=cj1+ cj2
cmj=(cj1, cj2)
cmj2=(cj1, cj2, cj3)
print('Bienvenido quieres jugar Blackjack o apostar en las peleas de pollos?')
print('(Escribe B, b o BLACKJACK para jugar blackjack)')
print('(Escribe P, p o POLLOS para apostar en las peleas de pollos)')
R= input(">")
if R == 'B' or R == 'b' or R == 'BLACKJACK':
    print('Bien')
    print('Repartiendo...')
    time.sleep(3)
    print('Ya han sido repartidas las cartas')
    print('Mazo:', cmj)
    time.sleep(1)
    print('¿Vas pedir una carta o vas plantarte?')
    print('(P mayúscula para pedir una carta y p minúscula para plantarse)')
    R2= input(">")
    if R2 == 'P':
        mtj= mtj + cj3
        time.sleep(2)
        print(cmj2)
        if mtc <= 16:
            mtc=mtc + cc3
            if mtj > 21:
                print('Perdiste...','Mazo Crupier:', cmc)
            elif mtj == 21:
                print('Ganaste!!!','Mazo Crupier:', cmc)
            elif mtj < 21:
                time.sleep(2)
                print('Es hora de revelar el mazo del crupier')
                print('Mazo Crupier:', cmc2)
                if mtc > 21:
                    print('Ganaste!!!')
                elif mtc > mtj or mtc == 21:
                    print('Perdiste...')
                elif mtc == mtj:
                    print('Empate...')
                elif mtj > mtc:
                    print('Ganaste!!!')
        elif mtc >=17:
            if mtj > 21:
                print('Perdiste...','Mazo Crupier:', cmc)
            elif mtj == 21:
                print('Ganaste!!!')
                print('Mazo Crupier:', cmc)
            elif mtj < 21:
                time.sleep(2)
                print('Es hora de revelar el mazo del crupier')
                print('Mazo Crupier:', cmc)
                if mtc > 21:
                    print('Ganaste!!!')
                elif mtc > mtj or mtc == 21:
                    print('Perdiste...')
                elif mtc == mtj:
                    print('Empate...')
                elif mtj > mtc:
                    print('Ganaste!!!')
    elif R2 == 'p':
        if mtc <= 16:
            mtc=mtc + cc3
            time.sleep(1)
            if mtj > 21:
                print('Perdiste...','Mazo Crupier:', cmc)
            elif mtj == 21:
                print('Ganaste!!!','Mazo Crupier:', cmc)
            elif mtj < 21:
                time.sleep(2)
                print('Es hora de revelar el mazo del crupier')
                print('Mazo Crupier:', cmc2)
                if mtc > 21:
                    print('Ganaste!!!')
                elif mtc > mtj or mtc == 21:
                    print('Perdiste...')
                elif mtc == mtj:
                    print('Empate...')
                elif mtj > mtc:
                    print('Ganaste!!!')
        elif mtc >= 17:
            time.sleep(1)
            if mtj > 21:
                print('Perdiste...','Mazo Crupier:', cmc)
            elif mtj == 21:
                print('Ganaste!!!','Mazo Crupier:', cmc)
            elif mtj < 21:
                print('Es hora de revelar el mazo del crupier')
                print('Mazo Crupier:', cmc)
                if mtc > 21:
                    print('Ganaste!!!')
                elif mtc > mtj or mtc == 21:
                    print('Perdiste...')
                elif mtc == mtj:
                    print('Empate...')
                elif mtj > mtc:
                    print('Ganaste!!!')
elif R == 'P' or R == 'p' or R == 'POLLOS':
    print('Elige un pollo para apostar el 1 o el 2')
    p= input('Pollo:')
    if p == '1':
        m=m - 10
        print('Gastaste 10 monedas te quedan:', m)
        time.sleep(1)
        print('Empieza la pelea!!!')
        r= randint(1,2)
        if r == 1:
            print('El Pollo 1 ataca se pegan picotazos y...')
            time.sleep(2)
            print('Llega el knockout del Pollo 2, Victoria del Pollo 1')
            m=m + 20
            print('Ganas 20 monedas, tienes', m, 'Monedas')
        elif r == 2:
            print('El Pollo 1 ataca se pegan picotazos y...')
            time.sleep(2)
            print('El Pollo 1 cae al suelo, Victoria del Pollo 2')
            print('Derrota...')
            print('Te quedas con', m, 'Monedas')
    elif p == '2':
        m=m - 10
        print('Gastaste 10 monedas te quedan:', m)
        time.sleep(1)
        print('Empieza la pelea!!!')
        r= randint(1,2)
        if r == 1:
            print('El pollo 2 ataca se pegan picotazos y...')
            time.sleep(2)
            print('Llega el knockout del Pollo 1, Victoria del Pollo 2')
            m=m + 20
            print('Ganas 20 monedas, tienes', m, 'Monedas')
        elif r == 2:
            print('El Pollo 2 ataca se pegan picotazos y...')
            time.sleep(2)
            print('El Pollo 2 cae al suelo, Victoria del Pollo 1')
            print('Derrota...')
            print('Te quedas con', m, 'Monedas')
else:
    print('Respuesta Errónea, reinicie el programa...')
time.sleep(1800)
print('Easter Egg')
time.sleep(1)
print('¿Que haces aquí todavía?, ¡Reinicia el Programa!')
\`\`\``,
      codigo_joaco: `\`\`\`python
import time
dinero = 10
pepe = 1
pepe -= 1
chi = 0
print('BLACKJACK')
time.sleep(1)
while dinero < 1000000 or dinero > 0 or pepe == 0:
    if dinero <= 0:
        break
    else:
        hola = 1
    p = 0
    pc = 0
    import time
    from random import randint
    a = (randint(2, 11)) #usado
    b = (randint(2, 10)) #usado
    g = (randint(2, 11)) #usado
    d = (randint(2, 11)) #usado
    e = (randint(2, 11)) #usado
    print('Fondos:', dinero)
    time.sleep(1)
    # while chi == 0:
    while dinero < 1000000:
        apuestaj = int(input('cuanto dinero vas a apostar?: '))
        if apuestaj > dinero:
            print('no tienes suficiente dinero🤡')
            time.sleep(1)
        elif apuestaj <= 0:
            print("Para jugar es necesario apostar")
            time.sleep(1)
        else:
            dinero -= apuestaj
            # chi += 1
            break

   
    print(('primera carta: '), (a))
    time.sleep(1)
    print(('segunda carta: '), (b))
    time.sleep(1)
    print(('suma: '), (a + b))
    time.sleep(1)
    p += (a + b)
    pc += (d + e)
    while p < 100:
        if p > 21:
            break
        baraja = input('sacas otra carta?: ')
        if baraja == 'no':
            break
        elif baraja == 'si':
            time.sleep(1)
            c = randint(2, 11)
            pc += randint(4, 9)
            print('valor de la carta:', c)
            time.sleep(1)
            p += c
            print('suma:', p)
            time.sleep(1)
        else:
            print('Por favor diga si o no')
            time.sleep(1)
    print('el valor de todas tus cartas: ', p)
    time.sleep(1)
    print('el valor de todas las cartas del computador: ', pc)
    time.sleep(1)
    if pc == p:
        print('Empate, ambos tienen la misma suma de cartas')
        time.sleep(1)
        dinero += apuestaj
    elif p == 21:
        print('Ganaste!!!💵💵💵')
        time.sleep(1)
        apuestaj *= 2
        dinero += apuestaj
        apuestaj += 1
    elif p > 21:
        print('Perdiste, te pasaste del limite :(')
        time.sleep(1)
        apuestaj -= apuestaj
    elif pc > 21:
        print('Ganaste, el computador se paso del limite')
        time.sleep(1)
        apuestaj *= 2
        dinero += apuestaj
        apuestaj += 1
    elif p < pc:
        print('Perdiste, el numero del computador se acerco mas a 21 :(')
        time.sleep(1)
        apuestaj -= apuestaj
    elif p > pc:
        print('Ganaste, tu numero se acerca mas a 21!!!💵💵💵')
        time.sleep(1)
        apuestaj *= 2
        dinero += apuestaj
        apuestaj += 1
    while True:
        estacosa = input('Quieres volver a jugar?: ')
        if estacosa == 'si':
            break
        elif estacosa == 'no':
            pepe += 1
            break
        else:
            print('Por favor introduzca si o no')
            time.sleep(1)
print('ganaste un total de', dinero, 'puntos')
time.sleep(1)
print('Gracias por jugar 😺🤑')
\`\`\``,
      codigo_isidora_mikaela: `\`\`\`python
import time

print("Bienvenido al calculador de signos del zodiaco y su compatibilidad!!")
print()

time.sleep(1)

print("Ingresa una fecha de nacimiento para descubrir tu signo!!")
dia = int(input("Ingresa el día de nacimiento: "))
mes = int(input("Ingresa el mes de nacimiento (en número): "))

def determinar_signo(dia, mes):
    if (mes == 1 and dia >= 20) or (mes == 2 and dia <= 18):
        print ("Acuario")
    elif (mes == 3 and dia >= 21) or (mes == 4 and dia <= 19):
        print ("Aries")
    elif (mes == 4 and dia >= 20) or (mes == 5 and dia <= 20):
        print ("Tauro")
    elif (mes == 5 and dia >= 21) or (mes == 6 and dia <= 20):
        print ("Géminis")
    elif (mes == 6 and dia >= 21) or (mes == 7 and dia <= 22):
        print ("Cáncer")
    elif (mes == 7 and dia >= 23) or (mes == 8 and dia <= 22):
        print ("Leo")
    elif (mes == 8 and dia >= 23) or (mes == 9 and dia <= 22):
        print ("Virgo")
    elif (mes == 9 and dia >= 23) or (mes == 10 and dia <= 22):
        print ("Libra")
    elif (mes == 10 and dia >= 23) or (mes == 11 and dia <= 21):
        print ("Escorpio")
    elif (mes == 11 and dia >= 22) or (mes == 12 and dia <= 21):
        print ("Sagitario")
    elif (mes == 12 and dia >= 22) or (mes == 1 and dia <= 19):
        print ("Capricornio")
    else:
        print ("Piscis")
       
determinar_signo(dia, mes)

print()
print("Ingresa la segunda fecha de nacimiento!!")


dia2 = int(input("Ingresa el día de nacimiento: "))
mes2 = int(input("Ingresa el mes de nacimiento (en número): "))

def determinar_signo(dia2, mes2):
    if (mes2 == 1 and dia2 >= 20) or (mes2 == 2 and dia2 <= 18):
        print ("Acuario")
    elif (mes2 == 3 and dia2 >= 21) or (mes2 == 4 and dia2 <= 19):
        print ("Aries")
    elif (mes2 == 4 and dia2 >= 20) or (mes2 == 5 and dia2 <= 20):
        print ("Tauro")
    elif (mes2 == 5 and dia2 >= 21) or (mes2 == 6 and dia2 <= 20):
        print ("Géminis")
    elif (mes2 == 6 and dia2 >= 21) or (mes2 == 7 and dia2 <= 22):
        print ("Cáncer")
    elif (mes2 == 7 and dia2 >= 23) or (mes2 == 8 and dia2 <= 22):
        print ("Leo")
    elif (mes2 == 8 and dia2 >= 23) or (mes2 == 9 and dia2 <= 22):
        print ("Virgo")
    elif (mes2 == 9 and dia2 >= 23) or (mes2 == 10 and dia2 <= 22):
        print ("Libra")
    elif (mes2 == 10 and dia2 >= 23) or (mes2 == 11 and dia2 <= 21):
        print ("Escorpio")
    elif (mes2 == 11 and dia2 >= 22) or (mes2 == 12 and dia2 <= 21):
        print ("Sagitario")
    elif (mes2 == 12 and dia2 >= 22) or (mes2 == 1 and dia2 <= 19):
        print ("Capricornio")
    else:
        print ("Piscis")

determinar_signo(dia2, mes2)

print()

time.sleep(1)

print("Vamos a realizar un test de compatibilidad con los signos zodiacales!!")
time.sleep(1)
print("Por favor ingresa los signos sin tildes y con mayúsculas en un inicio")
print("Ejemplo: Escorpio")
time.sleep(2)

print()

signo1 = input("Primer signo: ")
signo2 = input("Segundo signo: ")

fuego = ["Aries", "Leo", "Sagitario"]
tierra = ["Capricornio", "Virgo", "Tauro"]
agua = ["Cancer", "Escorpio", "Piscis"]
aire = ["Acuario", "Geminis", "Libra"]

if signo1 == signo2:
    print("Son compatibles!!")

elif (signo1 in fuego and signo2 in aire) or (signo1 in aire and signo2 in fuego):
    print("Son compatibles!!")

elif (signo1 in agua and signo2 in tierra) or (signo1 in tierra and signo2 in agua):
    print("Son compatibles!!")

else:
    print("No son compatibles :(")
\`\`\``,
      codigo_sofia_r: `\`\`\`python
from random import randint

print ("Escriba su nombre:")
nombre = input()
print ("Hola,", nombre, "bienvenido a la trivia Sofisin.")
print ("Tendrás que escoger la categoría que quieras responder (Geografía, cine y arte, deporte o matemáticas).")
print ("Cuando respondas, tendrás que escribir SOLO la letra de la alternativa.")
print ("La trivia terminara cuando llegues a los 5 puntos"+".")
print ("Si te equivocas 3 veces serás descalificado")

puntaje = 0
malas = 0
while puntaje <5 and malas <3:
    print ("Elige la categoría")
    print ("a.Geografía  b.Cine  c.Deportes  d.Matemáticas")
    categoria = input()
    if categoria == "a":
        opciones_geografia = randint(1,10)
        if opciones_geografia == 1:
            print ("¿Cuál es el país más chico del mundo?")
            print ("a.Paquistán  b.Suiza  c.El Vaticano  d.Guyana francesa")
            respuesta1a=input()
            resp1abien="c"
            if respuesta1a == resp1abien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta1a == "C":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'c.El Vaticano'")
                malas +=1
        if opciones_geografia == 2:
            print ("¿Cuántos océanos hay en la Tierra?")
            print ("a.4  b.5  c.6  d.7")
            respuesta2a=input()
            resp2abien="b"
            if respuesta2a == resp2abien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta2a == "B":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'b.5'")
                malas +=1
        if opciones_geografia == 3:
            print ("¿Qué país tiene más habitantes?")
            print ("a.Estados Unidos  b.China  c.Rusia  d.India")
            respuesta3a=input()
            resp3abien="d"
            if respuesta3a == resp3abien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta3a == "D":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'd.India'")
                malas +=1
        if opciones_geografia == 4:
            print ("¿Qué país es el más grande del mundo?")
            print ("a.Rusia  b.Brasil  c.Estados Unidos  d.India")
            respuesta4a=input()
            resp4abien="a"
            if respuesta4a == resp4abien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta4a == "A":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'a.Rusia'")
                malas +=1
        if opciones_geografia == 5:
            print ("¿Cuál es el rio más largo del mundo?")
            print ("a.Amazonas  b.Mississippi  c.Sena  d.Nilo")
            respuesta5a=input()
            resp5abien="d"
            if respuesta5a == resp5abien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta5a == "D":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'd.Nilo'")
                malas +=1
        if opciones_geografia == 6:
            print ("¿Dónde se encuentra el coral más largo del mundo?")
            print ("a.Hawaii  b.Brasil  c.Australia  d.Islas canarias")
            respuesta6a=input()
            resp6abien="c"
            if respuesta6a == resp6abien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta6a == "C":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'c.Australia'")
                malas +=1
        if opciones_geografia == 7:
            print ("¿Cuál es la ciudad más poblada del mundo")
            print ("a.Kyoto  b.Tokyo  c.Nueva Delhi  d.Dubai")
            respuesta7a=input()
            resp7abien="b"
            if respuesta7a == resp7abien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta7a == "B":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'b.Tokyo'")
                malas +=1
        if opciones_geografia == 8:
            print ("¿Cuál es el desierto más grande del mundo?")
            print ("a.Sahara  b.Atacama  c.Ártico  d.Arabia")
            respuesta8a=input()
            resp8abien="a"
            if respuesta8a == resp8abien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta8a == "A":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'a.Sahara'")
                malas +=1
        if opciones_geografia == 9:
            print ("¿Cuántos estados forman a Estados Unidos?")
            print ("a.48  b.49  c.50  d.51")
            respuesta9a=input()
            resp9abien="c"
            if respuesta9a == resp9abien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta9a == "C":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'c.50'")
                malas +=1
        if opciones_geografia == 10:
            print ("¿Dónde se encuentra Machu Picchu?")
            print ("a.Perú  b.Chile  c.Ecuador  d.Venezuela")
            respuesta10a=input()
            resp10abien="a"
            if respuesta10a == resp10abien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta10a == "A":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'a.Perú'")
                malas +=1
    elif categoria == "b": #cineyarte
        opciones_cinearte = randint(1,10)
        if opciones_cinearte == 1:
            print ("¿Cuál fue la primera película Disney?")
            print ("a.Cenicienta  b.La bella durmiente  c.Blancanieves  d.Bambi")
            respuesta1b=input()
            resp1bbien="c"
            if respuesta1b == resp1bbien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta1b == "C":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'c.Blancanieves'")
                malas +=1
        elif opciones_cinearte == 2:
            print ("¿Quién fue el director de 'Star Wars'?")
            print ("a.James Cameron  b.Kenny Ortega  c.Christopher Nolan  d.George Lucas")
            respuesta2b=input()
            resp2bbien="d"
            if respuesta2b == resp2bbien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta2b == "D":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'd.George Lucas'")
                malas +=1
        elif opciones_cinearte == 3:
            print ("¿Qué película ha ganado más premios Óscar?")
            print ("a.Avatar  b.Titanic  c.Lalaland  d.Lo que el viento se llevó")
            respuesta3b=input()
            resp3bbien="b"
            if respuesta3b == resp3bbien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta3b == "B":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'b.Titanic'")
                malas +=1
        elif opciones_cinearte == 4:
            print ("¿Qué actor interpreta a Spider-man en el UCM?")
            print ("a.Andrew Garfield  b.Tom Holland  c.Toby Maguire  d.Miles Morales")
            respuesta4b=input()
            resp4bbien="b"
            if respuesta4b == resp4bbien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta4b == "B":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'b.Tom Holland'")
                malas +=1
        elif opciones_cinearte == 5:
            print ("¿En qué película dos hermanas, una con poderes mágicos, buscan reconciliarse y salvara a su reino de un invierno eterno?")
            print ("a.Frozen  b.Moana  c.La sirenita  d.Rapunzel")
            respuesta5b=input()
            resp5bbien="a"
            if respuesta5b == resp5bbien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta5b == "A":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'a.Frozen'")
                malas +=1
        elif opciones_cinearte == 6:
            print ("¿En qué película un pez llamado Dory ayuda a un padre a encontrar a su hijo?")
            print ("a.Buscando a Dory  b.Wall-e  c.El rey león  d.Buscando a Nemo")
            respuesta6b=input()
            resp6bbien="d"
            if respuesta6b == resp6bbien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta6b == "D":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'd.Buscando a Nemo'")
                malas +=1
        elif opciones_cinearte == 7:
            print ("¿De qué serie es popular el personaje Walter White?")
            print ("a.Breaking Bad  b.The walking dead  c.Friends  d.Grey's Anatomy")
            respuesta7b=input()
            resp7bbien="a"
            if respuesta7b == resp7bbien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta7b == "A":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'a.Breaking Bad'")
                malas +=1
        elif opciones_cinearte == 8:
            print ("¿Qué instrumento toca Lisa Simpson?")
            print ("a.Saxofón  b.Arpa  c.Trompeta  d.Bajo")
            respuesta8b=input()
            resp8bbien="a"
            if respuesta8b == resp8bbien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta8b == "A":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'a.Saxofón'")
                malas +=1
        elif opciones_cinearte == 9:
            print ("¿Quién escribió 'La Odisea'?")
            print ("a.Rick Riordan  b.Homero  c.Sófocles  d.Tibulo")
            respuesta9b=input()
            resp9bbien="b"
            if respuesta9b == resp9bbien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta9b == "B":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'b.Homero'")
                malas +=1
        elif opciones_cinearte == 10:
            print ("'Ser o no ser, esa es la cuestión' ¿De qué libro es esa cita?")
            print ("a.Romeo y Julieta  b.Drácula  c.Mujercitas  d.Hamlet")
            respuesta10b=input()
            resp10bbien="d"
            if respuesta10b == resp10bbien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta10b == "D":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'd.Hamlet'")
                malas +=1
    elif categoria == "c": #deporte
        opciones_deporte = randint(1,10)
        if opciones_deporte == 1:
            print ("¿Cuánto dura un partido de futbol?")
            print ("a.80 minutos  b.90 minutos  c.110 minutos  d.120 minutos")
            respuesta1c=input()
            resp1cbien="b"
            if respuesta1c == resp1cbien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta1c == "B":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'b.90 minutos'")
                malas +=1
        elif opciones_deporte == 2:
            print ("¿Qué selección de futbol ha ganado más mundiales?")
            print ("a.Brasil  b.Francia  c.Alemania  d.Argentina")
            respuesta2c=input()
            resp2cbien="a"
            if respuesta2c == resp2cbien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta2c == "A":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'A.Brasil'")
                malas +=1
        elif opciones_deporte == 3:
            print ("En basquetbol ¿Cuántos jugadores por equipo hay en la cancha?")
            print ("a.5  b.6  c.7  d.8")
            respuesta3c=input()
            resp3cbien="a"
            if respuesta3c == resp3cbien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta3c == "A":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'a.5'")
                malas +=1
        elif opciones_deporte == 4:
            print ("En voleibol ¿Cómo se llama el jugador que usa una polera de distinto color?")
            print ("a.Armador  b.Punta  c.Centro  d.Libero")
            respuesta4c=input()
            resp4cbien="d"
            if respuesta4c == resp4cbien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta4c == "D":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'd.Libero'")
                malas +=1
        elif opciones_deporte == 5:
            print ("Cuál es la última cinta que se puede conseguir en las artes marciales")
            print ("a.Amarillo  b.Rojo  c.Negro  d.Azul")
            respuesta5c=input()
            resp5cbien="c"
            if respuesta5c == resp5cbien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta5c == "C":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'c.Negro'")
                malas +=1
        elif opciones_deporte == 6:
            print ("¿Cada cuántos años se hacen los Juegos Olímpicos?")
            print ("a.2  b.3  c.4  d.5")
            respuesta6c=input()
            resp6cbien="c"
            if respuesta6c == resp6cbien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta6c == "C":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'c.4'")
                malas +=1
        elif opciones_deporte == 7:
            print ("¿Dónde se crearon los Juegos Olímpicos?")
            print ("a.Grecia  b.Inglaterra  c.Japón  d.Estados Unidos")
            respuesta7c=input()
            resp7cbien="a"
            if respuesta7c == resp7cbien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta7c == "A":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'a.Grecia'")
                malas +=1
        elif opciones_deporte == 8:
            print ("¿Cómo se llama la mascota de los Panamericanos 2023?")
            print ("a.Milko  b.Pachi  c.Fiu  d.Leo")
            respuesta8c=input()
            resp8cbien="c"
            if respuesta8c == resp8cbien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta8c == "C":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'c.Fiu'")
                malas +=1
        elif opciones_deporte == 9:
            print ("¿Quién es la persona que ha ganado más medallas en los JJOO?")
            print ("a.Michael Phelps  b.Simone Biles  c.Larisa Latynina  d.Birgit Fischer")
            respuesta9c=input()
            resp9cbien="a"
            if respuesta9c == resp9cbien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta9c == "A":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'a.Michael Phelps'")
                malas +=1
        elif opciones_deporte == 10:
            print ("¿Qué deporte practica Simone Biles?")
            print ("a.Atletismo  b.Gimnasia Artistica  c.Natación  d.Tenis")
            respuesta10c=input()
            resp10cbien="b"
            if respuesta10c == resp10cbien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta10c == "B":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'b.Gimnasia Artistica'")
                malas +=1
    elif categoria == "d": #matematica
        opciones_maths = randint(1,10)
        if opciones_maths == 1:
            print ("¿Cómo se llama también el perímetro de un circulo?")
            print ("a.Lado  b.Radio  c.Circunferencia  d.Diámetro")
            respuesta1d=input()
            resp1dbien="c"
            if respuesta1d == resp1dbien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta1d == "C":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'c.Circunferencia'")
                malas +=1
        elif opciones_maths == 2:
            print ("¿Cuál es el único numero primo par?")
            print ("a.2  b.13  c.22  d.37")
            respuesta2d=input()
            resp2dbien="a"
            if respuesta2d == resp2dbien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta2d == "A":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'a.2'")
                malas +=1
        elif opciones_maths == 3:
            print ("¿Qué  es Pi, un número racional o irracional?")
            print ("a.Racional  b.Irracional")
            respuesta3d=input()
            resp3dbien="b"
            if respuesta3d == resp3dbien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta3d == "B":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'b.Irracional'")
                malas +=1
        elif opciones_maths == 4:
            print ("¿Cuál es el último mes del año con 31 dias?")
            print ("a.Septiembre  b.Octubre  c.Noviembre  d.Diciembre")
            respuesta4d=input()
            resp4dbien="d"
            if respuesta4d == resp4dbien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta4d == "D":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'd.Diciembre'")
                malas +=1
        elif opciones_maths == 5:
            print ("¿Cuál es la 'receta' matemática para resolver algo?")
            print ("a.Algoritmo  b.Hipótesis  c.Fórmula  d.Operación")
            respuesta5d=input()
            resp5dbien="c"
            if respuesta5d == resp5dbien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta5d == "C":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'c.Fórmula'")
                malas +=1
        elif opciones_maths == 6:
            print ("¿Pitágoras desarrollo un teorema sobre qué formas?")
            print ("a.Triángulos  b.Cuadrados  c.Pentágonos  d.Pirámide")
            respuesta6d=input()
            resp6dbien="a"
            if respuesta6d == resp6dbien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta6d == "A":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'a.Triángulo'")
                malas +=1
        elif opciones_maths == 7:
            print ("¿Qué ángulo define los lados 5 y 12 en un triángulo de lados 5, 12 y 13?")
            print ("a.Águdo  b.Recto  c.Obtuso  d.No es posible formar un ángulo")
            respuesta7d=input()
            resp7dbien="b"
            if respuesta7d == resp7dbien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta7d == "B":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'b.Recto'")
                malas +=1
        elif opciones_maths == 8:
            print ("¿Quién es el científico que nació el día de Pi?")
            print ("a.Newton  b.Einstein  c.Bohr  d.Darwin")
            respuesta8d=input()
            resp8dbien="b"
            if respuesta8d == resp8dbien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta8d == "B":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'a.Sahara'")
                malas +=1
        elif opciones_maths == 9:
            print ("¿Cuál es el número primo que le sigue al 7?")
            print ("a.8  b.9  c.10  d.11")
            respuesta9d=input()
            resp9dbien="d"
            if respuesta9d == resp9dbien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta9d == "D":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'd.11'")
                malas +=1
        elif opciones_maths == 10:
            print ("¿Cuánto es 52/4?")
            print ("a.10  b.11  c.12  d.13")
            respuesta10d=input()
            resp10dbien="d"
            if respuesta10d == resp10dbien:
                print ("Respuesta correcta")
                puntaje +=1
            elif respuesta10d == "D":
                print ("Respuesta Correcta")
                puntaje +=1
            else:
                print ("Respuesta incorrecta, era la alternativa 'd.13'")
                malas +=1
    print ("Tu puntaje es:", puntaje, "y tienes", malas, "malas")

if puntaje ==5:
    print ("Has terminado la trivia, bien hecho")
elif malas ==3:
    print ("Tuviste 3 malas, has sido descalificado")
\`\`\``,
      codigo_maite: `\`\`\`python
palabras = ["Rin", "Itoshi", "maite", "pelota", "futbol", "estadio", "gol", "moda", "vestido", "pintauñas", "revista", "peinado", "rosa", "naranja", "playa", "estrella", "teamorinitoshi", "hellokitty", "bobesponja", "palmeras", "🌴", "🦀", "🐁", "mamba", "cobra", "boa", "🕷", "ipadmini", "perfume", "sol", "luces", "beyonce", "explosion", "pistola", "ojos", "hola", "teamverano", "iris", "calavera", "ventana", "selva", "naranjo"]

vidas_diccionario_visual = {
        0: """
                ___________
               | /        | 
               |/        ( )
               |          |
               |         / \\
               |
           """,
        1: """
                ___________
               | /        | 
               |/        ( )
               |          |
               |         / 
               |
            """,
        2: """
                ___________
               | /        | 
               |/        ( )
               |          |
               |          
               |
            """,
        3: """
                ___________
               | /        | 
               |/        ( )
               |          
               |          
               |
            """,
        4: """
                ___________
               | /        | 
               |/        
               |          
               |          
               |
            """,
        5: """
                ___________
               | /        
               |/        
               |          
               |          
               |
            """,
        6: """
               |
               |
               |
               |
               |
            """,
        7: "",
    }

import random
import string


def obtener_palabra_válida(palabras):
    palabra = random.choice(palabras)  # seleccionar una palabra al azar de la lista

    # Si la palabra contiene un guión o un espacio,
    # seguir seleccionando una palabra al azar.
    while '-' in palabra or ' ' in palabra:
        palabra = random.choice(palabras)

    return palabra.upper()


def ahorcado():

    print("_______________________________________")
    print("        │ 🦀️ El Ahorcado 🦀│          ")
    print("⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺")

    palabra = obtener_palabra_válida(palabras)
    letras_por_adivinar = set(palabra)  # conjunto de letras de la palabra que deben ser adivinadas.
    abecedario = set(string.ascii_uppercase) # conjunto de letras en el abecedario.
    letras_adivinadas = set()  # letras que el usuario ha advinado durante el juego.

    vidas = 7

    # Obtener respuesta del usuario mientras existan 
    # letras pendientes y al jugador le queden vidas.
    while len(letras_por_adivinar) > 0 and vidas > 0:
        # Letras adivinadas:
        # ' '.join(['a', 'b', 'c']) --> 'a b c'
        print(f"Te quedan {vidas} vidas y has usado estas letras: {' '.join(letras_adivinadas)}")

        # Estado actual de la palabra que el jugador debe adivinar (por ejemplo:  H - L A)
        palabra_lista = [letra if letra in letras_adivinadas else '-' for letra in palabra]
        print(vidas_diccionario_visual[vidas]) # mostrar estado del ahorcado.
        print(f"Palabra: {' '.join(palabra_lista)}") # mostrar las letras separadas por un espacio.

        # El usuario escoge una letra nueva
        letra_usuario = input('Escoge una letra: ').upper()

        # Si la letra escogida por el usuario está en el abecedario
        # y no está en el conjunto de letras que ya se han ingresado,
        # se añade la letra al conjunto de letras ingresadas.
        if letra_usuario in abecedario - letras_adivinadas:
            letras_adivinadas.add(letra_usuario)
            # Si la letra está en la palabra, quitar la letra 
            # del conjunto de letras pendientes por adivinar. 
            if letra_usuario in letras_por_adivinar:
                letras_por_adivinar.remove(letra_usuario)
                print('')
            # Si la letra no está en la palabra, quitar una vida.
            else:
                vidas = vidas - 1
                print(f"\n{letra_usuario} no está en la palabra.")
        # Si la letra escogida por el usuario ya fue ingresada.
        elif letra_usuario in letras_adivinadas:
            print("\nYa escogiste esa letra. Escoge otra letra.")
        else:
            print("\nEsta letra no es válida.")

    # El juego llega a esta línea cuando se agotan las vidas del jugador 
    # o cuando se adivinan todas las letras de la palabra.
    if vidas == 0:
        print(vidas_diccionario_visual[vidas])
        print(f"¡Ahorcado! Perdiste. La palabra era: {palabra}")
    else:
        print(f'¡Bieeeeeeeeen! ¡Adivinaste la palabra: {palabra}!')


if __name__ == '__main__':
    ahorcado()
\`\`\``,
      codigo_samka_sofi: `\`\`\`python
import datetime
import time

print("0%...")
time.sleep(1)
print("15%...")
time.sleep(1)
print("50%...")
time.sleep(0.5)
print("81%...")
time.sleep(0.5)
print("100%...")
time.sleep(0.5)
print("...")
time.sleep(0.5)
print ("Listo!")
time.sleep(1)
print ("...")
time.sleep (0.5)
print ('¯¨’*~. RESCATE A MIAUMIAU (=^-ω-^=)')
time.sleep (0.7)
print("hecho por relitos y 666ssffi")
time.sleep(2)
input ("aprete enter para iniciar.ʳ")
print ("Notas: responder solo en minuscula y apretar ENTER cuando se pida. ")
time.sleep(2)
print ("︿︿︿︿︿︿︿︿︿︿︿︿︿︿︿")
time.sleep(0.1)
print("En las tierras lejanas del pueblo felino")
time.sleep(1)
print ("en medio de campos de hierba alta y callejones estrechos")
time.sleep(2)
print ("vivía un gato cuya valentía superaba cualquier leyenda. ")
time.sleep(2)

name = input("y su nombre era.....? (ingresa un nombre): ")

print (" su nombre era", name + ".  (=^･ｪ･^=) ")
time.sleep(0.5)
print ("︶︶︶︶︶︶︶︶︶︶︶︶︶︶︶")
time.sleep(1)
print ("...")
time.sleep(1)
print ("︿︿︿︿︿︿︿︿︿︿︿︿︿︿︿")
time.sleep(0.1)
print ("era una mañana como siempre,", name, "se desperto")
time.sleep(1)
print ("y como de costumbre decidio salir a cumplir su labor")
time.sleep(1)
print ("de caballero...")
time.sleep(0.1)
print ("︶︶︶︶︶︶︶︶︶︶︶︶︶︶︶")
time.sleep(0.5)
print("...")
time.sleep(0.5)

print ("──꒰, Ayuda! Ayuda! ,꒱ exclamo un gatito.")
time.sleep (1)
respuesta = input ( "a) Que paso???   b) ...  :")

while respuesta != "a":
  print ("──꒰, Alguien?! Porfavor! ,꒱")
  respuesta = input ('a) Que paso???    b) ...:')

print ("──꒰,",name, "! Han secuestrado a miaumiau! ,꒱" )
time.sleep (1)
respuesta2 = input ( "a) Que?! Quien se la llevo?!   b) y? : ")

while respuesta2 != "a" :
     print ("──꒰, No te vas a preocupar?!? Ayudanos! ,꒱")
     respuesta2 = input ( "a) Que?! Quien se la llevo?!   b) y? : ")
print ("──꒰, Se la llevo Lord Colmillo! ,꒱")
time.sleep (1)
input (" a) ...   b) ... : ")
print ("...")
time.sleep(1)
print ("* Lord Colmillo, el rey de los ratones secuestro a la joya")
time.sleep(1)
print ("de nuestro pueblo felino, la princesa miaumiau.")
time.sleep(1)
print("...")
time.sleep(1)
print ("Esto no puede estar pasando.")
time.sleep(2)
print ("Debo hacer algo.")
time.sleep (1)
print ("︿︿︿︿︿︿︿︿︿︿︿︿︿︿︿")
time.sleep(1)
print("Su deber como caballero le llamaba. En un abrir y cerrar")
time.sleep(1)
print ("de ojos.", name, "se puso su armadura reluciente")
time.sleep(1)
print (" y se lanzó hacia la oscuridad para enfrentar al villano")
time.sleep(1)
print ("que se robo a la princesa. ")
time.sleep(1)
print ("︶︶︶︶︶︶︶︶︶︶︶︶︶︶︶")
time.sleep(1)
print ("...")
time.sleep(1)
print ("︿︿︿︿︿︿︿︿︿︿︿︿︿︿︿")
time.sleep(0.5)
print("Atravesó bosques tenebrosos y callejones laberínticos, enfrentándose a criaturas de la noche y peleando con ratas.")
time.sleep(1)
print ("...")
time.sleep(0.5)
print (" ──꒰, Muere!,꒱ grito una rata enemiga.")
pelea = input ("a) Atacar con espada   b) No decir nada:")

while pelea != "a" :
 print ("* la armadura de ", name, "resistio. ")
 print (" ──꒰, Muere!,꒱ grito una rata enemiga.")
 pelea = input ("a) Atacar con espada   b) No decir nada:")

print (" ──꒰, Ahh!,꒱ la rata escapo con miedo.")
time.sleep(1)
print ("...")
time.sleep(1)
print ("︶︶︶︶︶︶︶︶︶︶︶︶︶︶︶")

opcion_uno = 'salvar a la princesa'
opcion_dos = 'salvar tu propio pellejo'

print ("︿︿︿︿︿︿︿︿︿︿︿︿︿︿︿")
time.sleep(1)
print('En lo más profundo de las sombras que envolvían el castillo,' , name, 'con su armadura resplandeciente, se encontró cara a cara con el malévolo Vizconde Colmillo, el astuto ratón oscuro que tenía prisionera a la noble princesa Miau Miau....')
time.sleep(1)
print ("︶︶︶︶︶︶︶︶︶︶︶︶︶︶︶")
time.sleep(10)
print ("︿︿︿︿︿︿︿︿︿︿︿︿︿︿︿")
time.sleep(1)
print('El Vizconde Colmillo, con ojos chispeantes y una risa siniestra: ¡Oh, qué tenemos aquí! Un gato valiente que se aventura en mi reino de sombras. ¿Quién osa desafiar al gran Vizconde Colmillo?....')
time.sleep(1)
print ("︶︶︶︶︶︶︶︶︶︶︶︶︶︶︶")
time.sleep(9)
print ("︿︿︿︿︿︿︿︿︿︿︿︿︿︿︿")
time.sleep(1)
print(name,'sin ceder ante las sombras que intentaban envolverlo, con garra afilada y mirada indomable, respondió con voz resonante: Mi deber me guía, Vizconde Colmillo. He venido a poner fin a tu reinado de oscuridad y liberar a la princesa Miau Miau. Prepárate, Vizconde Colmillo, porque hoy, tu reinado llega a su fin....')
time.sleep(1)
print ("︶︶︶︶︶︶︶︶︶︶︶︶︶︶︶")
time.sleep(14)
print ("︿︿︿︿︿︿︿︿︿︿︿︿︿︿︿")
time.sleep(1)
print('La batalla épica se desató en el siniestro castillo. Los movimientos de Vizconde Colmillo eran ágiles y escurridizos, mientras que Sir Zarpazo, con su armadura reluciente, luchaba con fiereza para contrarrestar cada ataque, pero la astucia del ratón oscuro lo superaba. El Vizconde Colmillo aprovechó la oportunidad y acorraló a Sir Zarpazo en un rincón sombrío....')
time.sleep(1)
print ("︶︶︶︶︶︶︶︶︶︶︶︶︶︶︶")
time.sleep(13)
print ("︿︿︿︿︿︿︿︿︿︿︿︿︿︿︿")
time.sleep(1)
print('Entre los destellos de garras afiladas y esquivas mortales,', name, 'notó una ventana entreabierta que destellaba la luz de la luna. El gato caballero, con la princesa Miau Miau prisionera ya a su lado, se enfrentó a una decisión difícil. La ventana ofrecía una vía de escape, pero solo había tiempo para salvar a uno: la princesa o él mismo. La mirada de Sir Zarpazo se desvió entre la ventana y la valiente noble a su lado, cuyos ojos reflejaban una mezcla de angustia y esperanza....')
time.sleep(1)
print ("︶︶︶︶︶︶︶︶︶︶︶︶︶︶︶")
time.sleep(18)
print ("︿︿︿︿︿︿︿︿︿︿︿︿︿︿︿")
time.sleep(1)
texto = 'Vizconde Colmillo, con una risa burlona: Parece que tu luz se desvanece,' , name, '¿Qué decidirás, salvar a la princesa o salvar tu propio pellejo?: '

respuesta = input(texto)
time.sleep(1)
print ("︶︶︶︶︶︶︶︶︶︶︶︶︶︶︶")

if (respuesta == opcion_uno):
    print ("︿︿︿︿︿︿︿︿︿︿︿︿︿︿︿")
    time.sleep(1)
    print(name,', enfrentando la difícil elección: Mi deber es proteger a los indefensos. ¡Vete, princesa! -exclamó, empujando a la princesa hacia la ventana. La princesa, sorprendida pero agradecida, se deslizó hacia la libertad, mientras que Sir Zarpazo se enfrentó a la ira renovada del Vizconde Colmillo. El enfrentamiento alcanzó su clímax, cada movimiento calculado y cada golpe decidido.La ventana se cerró con un sonido sordo, sellando el destino de Sir Zarpazo dentro del castillo. La batalla culminó con un giro final, donde la espada de Sir Zarpazo encontró su camino hacia Vizconde Colmillo, derrotándolo finalmente.')
    time.sleep(1)
    print ("︶︶︶︶︶︶︶︶︶︶︶︶︶︶︶")
    time.sleep(20)
    print ("︿︿︿︿︿︿︿︿︿︿︿︿︿︿︿")
    time.sleep(1)
    print('Felinópolis resonó con el triunfo del gato caballero, cuyas hazañas se convirtieron en leyendas que perduraron en el tiempo.....')
    time.sleep(1)
    print ("︶︶︶︶︶︶︶︶︶︶︶︶︶︶︶")
    time.sleep(5)
    print('El fin (=^･ｪ･^=)')
elif (respuesta == opcion_dos):
    print ("︿︿︿︿︿︿︿︿︿︿︿︿︿︿︿")
    time.sleep(1)
    print('En un intento desesperado por escapar de las garras de Lord Colmillo,', name, ' tomó la decisión de intentar saltar por la ventana para salvarse a sí mismo....')
    time.sleep(1)
    print ("︶︶︶︶︶︶︶︶︶︶︶︶︶︶︶")
    time.sleep(7)
    print ("︿︿︿︿︿︿︿︿︿︿︿︿︿︿︿")
    time.sleep(1)
    print('Sin embargo, el destino tenía otros planes. Mientras' , name, 'se deslizaba por el exterior del castillo, la ventana se cerró bruscamente, dejando al gato caballero en una caída libre hacia la oscuridad. La tragedia golpeó con fuerza cuando', name, 'en su intento de salvación, enfrentó una caída mortal que silenció sus valientes rugidos....')
    time.sleep(1)
    print ("︶︶︶︶︶︶︶︶︶︶︶︶︶︶︶")
    time.sleep(14)
    print ("︿︿︿︿︿︿︿︿︿︿︿︿︿︿︿")
    time.sleep(1)
    print('La noticia de la muerte de', name, 'resonó en todo Felinópolis como un lamento. La princesa Miau, marcada por la tristeza y la sorpresa, se encontró ahora sin su valiente defensor. La luz que ', name, 'representaba se apagó, dejando al reino sumido en una oscuridad aún más profunda....')
    time.sleep(1)
    print ("︶︶︶︶︶︶︶︶︶︶︶︶︶︶︶")
    time.sleep(14)
    print ("︿︿︿︿︿︿︿︿︿︿︿︿︿︿︿")
    time.sleep(1)
    print('Vizconde Colmillo, aprovechando la oportunidad, intensificó su tiranía sobre Felinópolis, burlándose de la memoria del gato caballero caído. La tristeza se apoderó de las calles, y la esperanza que una vez floreció se desvaneció como las estrellas en la mañana....')
    time.sleep(1)
    print ("︶︶︶︶︶︶︶︶︶︶︶︶︶︶︶")
    time.sleep(13)
    print ("︿︿︿︿︿︿︿︿︿︿︿︿︿︿︿")
    time.sleep(1)
    print('La historia de' ,name, 'se convirtió en una leyenda trágica que resonó a través de las generaciones, recordando a los habitantes de Felinópolis el alto costo de las elecciones y la fragilidad de la justicia en el reino de las patas suaves. La princesa Miau Miau, ahora sola en su lucha contra las sombras, llevó consigo el recuerdo del sacrificio de Sir Zarpazo, un faro de nobleza que perduró en los corazones de aquellos que aún anhelaban la luz en la oscuridad....')
    time.sleep(1)
    print ("︶︶︶︶︶︶︶︶︶︶︶︶︶︶︶")
    time.sleep(18)
    print('El fin (=^-ω-^=)')
\`\`\``,
      codigo_nico: `\`\`\`python
# JUEGO DE APUESTA DE FUTBOL
import time
from random import randint

print("Buen dia jugador, ¿quiere que hagamos una apuesta?, sera corta, mira va a comenzar un partido en poco, y quisiera probar un poco de suerte")
time.sleep(5)
print("Es posible que ganes dinero, mucho dinero, o tal ves no, es lo divertido de esto...")
time.sleep(5)

juego = input("¿Quieres apostar?: ")
if juego == ("si"):
    print("asi me gusta, esto es lo que voy a apostar")
    time.sleep(3)
    print("apuesto $2500 a que gana... bueno, me lo tengo que pensar, te dejare a usted a que elija y luego yo lo hare ")
    time.sleep(2)
    print("espero tu apuesta")
    time.sleep(3)
    print('(estas son las opciones que tienes jugador)')
    time.sleep(1)
    print("(el digito de la izquierda sera el equipo visita, el de la derecha sera el equipo local")
    time.sleep(1)
    print("(0-0|1-0|0-1|1-1|2-0|0-2|2-1|1-2|3-0|0-3|2-2|3-1|1-3|3-2|2-3)")
    
    apuestaIA = "  "
        
    numero = randint(1, 15)
    if numero == 1:
        apuestaIA = ("0-0")
    elif numero == 2:
         apuestaIA = ("1-0")
    elif numero == 3:
        apuestaIA =("0-1")
    elif numero == 4:
        apuestaIA = ("1-1")
    elif numero == 5: 
        apuestaIA = ("2-0")
    elif numero == 6:
        apuestaIA = ("0-2")
    elif numero == 7:
        apuestaIA = ("2-1")
    elif numero == 8:
        apuestaIA = ("1-2")
    elif numero == 9:
        apuestaIA = ("3-0")
    elif numero == 10:
        apuestaIA = ("0-3")
    elif numero == 11:
        apuestaIA = ("2-2")
    elif numero == 12:
        apuestaIA = ("3-1")
    elif numero == 13:
        apuestaIA = ("1-3")
    elif numero == 14:
        apuestaIA = ("3-2")
    elif numero == 15:
        apuestaIA = ("2-3")
    
    apuestaj = input(" ")
    time.sleep(3)
    print(f"¡oh, interesante... muy interesante, yo apuesto por {apuestaIA}, por cierto, en poco tiempo el partido terminara!")
    time.sleep(10)
    goles_visita = randint(0, 3)
    goles_local = randint(0, 3)
    resultado_partido = f"{goles_visita}-{goles_local}"
    print("///Termino el partido señoras y señores, ahora revisaremos goles e indicaremos al ganador y por cuanto fue, no cambie de canal.///")
    time.sleep(6)
    if goles_local > goles_visita:
        print(f"///gana el equipo local por {goles_visita} a {goles_local}///")
    elif goles_local < goles_visita:
        print(f"///gana el equipo visita por {goles_visita} a {goles_local}///")
    else:
        print(f"///Esto fue un empate de {goles_visita}-{goles_local}///")
    time.sleep(2)
    if apuestaj == resultado_partido:
        print("ganaste, bien hecho, bueno, fue divertido esto, nos vemos")
    elif apuestaIA == resultado_partido:
        print("gane, suerte para la proxima, fue divertido esto, nos vemos")
    elif apuestaj == resultado_partido and apuestaIA == resultado_partido:
        print("increiblemente empatamos")
    else:
        print("vaya, nadie gano, bueno, fue divertido mientras duro, nos vemos") 
        #continuara
else:
    print("bien, lo tenia que intentar, adios y hasta nunca >:v")
\`\`\``,
      codigo_tripleta: `\`\`\`python
from random import random, randint, choice
import math
print("Bienvenidos a nuestro panel de comandos, acá podrás encontrar varias actividades que hacer, escribe ayuda para saber comandos")
A = 0

while A != 5:
    com = (input("Escribe un comando: "))
    if com == ("ayuda"): #Comando para ayuda
        print("___________________________________")
        print("Estos son los comandos disponibles: ")
        print("⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ")
        print("Dado")
        print("Bola de la suerte")
        print("Calculadora imc")
        print("Cachipun")
        print("⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆")
        print("___________________________________")

    elif com == ("Dado"): # comando para hacer dado
        dado = int(input("dame el numero de caras que quieres que tenga el dado (tiene que ser positivo): "))
        numero = randint(1,dado)
        print (numero)

    elif com == ("Bola de la suerte"):# comando para la bola de la suerte
        pregunta = input("dame una pregunta: ")
        numeroBola = randint(1,6)
        if  numeroBola == 1:
            print("Sí")
        elif  numeroBola == 2:
            print("No")
        elif  numeroBola == 3:
            print("Tal vez")
        elif  numeroBola == 4:
            print("Es muy probable")
        elif  numeroBola == 5:
            print("Es poco probable")
        elif  numeroBola == 6:
            print("deberías adoptar un gato")

    elif com == ("Calculadora imc"): #comando para la calculadora de imc
        peso = float(input("dame tu peso en kilogramos(solo el numero): "))
        altura = float(input("dame tu altura en metos"))
        imc = (peso / altura**2)
        print ("tu imc es de ", imc)
        if imc <18.5:
            print("tu peso es bajo")
        elif imc <24.9:
            print("tu peso es adecuado")
        elif imc <29.9:
            print("tu peso es alto")
        elif imc <34.9:
            print("tu peso es muy alto")

    elif com == ("Adivina un numero"):
        NumeroParaAdivinar = randint(1000,9999)
        LargoNumero = int( math.log10(NumeroParaAdivinar) ) + 1
        print ("tu numero tiene", LargoNumero, "digitos")
        ResultadoJugador = int(input("Escribe aquí el numero que crees que es, tienes 4 intentos mas"))
        if ResultadoJugador != NumeroParaAdivinar:
                print ("tu numero termina con", NumeroParaAdivinar % 10)
        ResultadoJugador = int(input("Escribe aquí el numero que crees que es, tienes 3 intentos mas"))
        if ResultadoJugador != NumeroParaAdivinar:
                print ("tu numero termina con ", NumeroParaAdivinar % 100)
        ResultadoJugador = int(input("Escribe aquí el numero que crees que es, tienes 2 intentos mas"))
        if ResultadoJugador != NumeroParaAdivinar:
                print ("tu numero termina con ", NumeroParaAdivinar % 1000)
        ResultadoJugador = int(input("Escribe aquí el numero que crees que es, tienes 2 intentos mas"))
        if ResultadoJugador != NumeroParaAdivinar:
            print("haz perdido, no pudiste adivinar el numero, este era", NumeroParaAdivinar)
        else:
            print("Felicitaciones!!!, haz adivinado el numero")

    elif com == ("Cachipun"):
        def jugar_piedra_papel_tijera(jugador, computadora):
            opciones = ["piedra", "papel", "tijera"]
       
            if jugador == computadora:
                return "Empate"
       
            if jugador == "piedra":
                if computadora == "papel":
                    return "Computadora gana"
                else:
                    return "Jugador gana"
       
            if jugador == "papel":
                if computadora == "tijera":
                    return "Computadora gana"
                else:
                    return "Jugador gana"
       
            if jugador == "tijera":
                if computadora == "piedra":
                    return "Computadora gana"
                else:
                    return "Jugador gana"
       
        def main():
            print("Bienvenido a Piedra, Papel o Tijera!")
            jugador = input("Elige: piedra, papel o tijera: ").lower()
            computadora = choice(["piedra", "papel", "tijera"])
            resultado = jugar_piedra_papel_tijera(jugador, computadora)
            print(f"Jugador elige {jugador}")
            print(f"Computadora elige {computadora}")
            print(resultado)
       
        if __name__ == '__main__':
            main()

    elif com == ("Verdad o Reto"):
        salir = 0
        while salir < 1:
           
            print('Menu de: Verdad o Reto')
            print('1.- 2 Jugadores')
            print('2.- 3 jugadores')
            print('3.- 4 Jugadores')
            numero = int(input('ingrese el número del juego: '))
       
            if numero == 1:
                print('!Los retos los proponen los jugadores el computador solo escoje a quien le tocó el reto.¡')
                print()
                print()
                user1 = input('Ingrese nombre del jugador 1: ')
                user2 = input('Ingrese nombre del jugador 2: ')
       
                r = 1
                while r < 2:
                    verdad_o_reto = randint(1,2)
                    if verdad_o_reto == 1:
                        print('Reto para: ')
                        usuarios = randint(1,2)
                        if usuarios == 1:
                            print(user1)
                            print()
                        else:
                            print(user2)
                            print()
                    else:
                        print()
                        print('VERDAD PARA:')
                        usuarios = randint(1,2)
                        if usuarios == 1:
                            print(user1)
                            print()
                        else:
                            print(user2)
                            print()
                    r = r + 1
                    print('Introduce 0 para salir al menu')
                    reintento = input('Jugar otra vez-> Enter: ')
                    if reintento == '':
                        r = r - 1
                    elif reintento == '0':
                        salir = salir + 1
                        r = 3

            if numero == 2:
                print('!Los retos los proponen los jugadores el computador solo escoje a quien le toco el reto.¡')
                print()
                print()
                user1 = input('Ingrese nombre del jugador 1: ')
                user2 = input('Ingrese nombre del jugardor 2: ')
                user3 = input('Ingrese nombre del jugador 3: ')
       
                r = 1
                while r < 2:
                    verdad_o_reto = randint(1,2)
                    if verdad_o_reto == 1:
                        print('RETO PARA: ')
                        usuarios = randint(1,3)
                        if usuarios == 1:
                            print(user1)
                            print()
                        elif usuarios == 2:
                            print(user2)
                            print()
                        elif usuarios == 3:
                            print(user3)
                            print()
                   
                    elif verdad_o_reto == 2:
                        print()
                        print('VERDAD PARA:')
                        usuarios = randint(1,3)
                        if usuarios == 1:
                            print(user1)
                            print()
                        elif usuarios == 2:
                            print(user2)
                            print()
                        elif usuarios == 3:
                            print(user3)
                            print()
               
                        r = r + 1
                    print('Ingrese 0 para salir')
                    reintento = input('Jugar otra vez-> Enter: ')
                    if reintento == '':
                        r = r - 1
                    elif reintento == '0':
                        salir = salir + 1
                        r=3

            if numero == 3:
                print('!Los retos los proponen los jugadores el computador solo escoje a quien le tocó el reto.¡')
                print()
                print()
                user1 = input('Ingrese nombre del jugador 1: ')
                user2 = input('Ingrese nombre del jugardor 2: ')
                user3 = input('Ingrese nombre del jugador 3: ')
                user4 = input('Ingrese nombre del jugador 4: ')
                r = 1
                while r < 2:
                    verdad_o_reto = randint(1,2)
                    if verdad_o_reto == 1:
                        print('Reto para: ')
                        usuarios = randint(1,4)
                        if usuarios == 1:
                            print(user1)
                            print()
                        elif usuarios == 2:
                            print(user2)
                            print()
                        elif usuarios == 3:
                            print(user3)
                            print()
                        else:
                            print(user4)
                            print()
                   
                    elif verdad_o_reto == 2:
                        print()
                        print('VERDAD PARA:')
                        usuarios = randint(1,4)
                        if usuarios == 1:
                            print(user1)
                            print()
                        elif usuarios == 2:
                            print(user2)
                            print()
                        elif usuarios == 3:
                            print(user3)
                            print()
                        else:
                            print(user4)
                            print()
               
                        r = r + 1
                    print('Ingrese 0 para salir')
                    reintento = input('Jugar otra vez-> Enter: ')
                    print()
                    if reintento == '':
                        r = r - 1
                    elif reintento == '0':
                        salir = salir + 1
                        r=3

    else:
        print("Este comando no está disponible, tal vez esté mal escrito")
        print("Recuerda escribir ayuda para saber los comandos!")
\`\`\``,
      codigo_benjamin: `\`\`\`python
from random import randint, random

print("En este juego debes sacar una carta del 1 al 10 al azar, si sacas una carta mayor que la carta del computador, ganas el juego, si no, pierdes el juego. ")
print("")
print("Escribe: sacar carta")
input("> ")

carta_jugador = random()
if carta_jugador < 0.1:
    print('1')
elif carta_jugador < 0.2:
    print('2')
elif carta_jugador < 0.3:
    print('3')
elif carta_jugador < 0.4:
    print('4')
elif carta_jugador < 0.5:
    print('5')
elif carta_jugador < 0.6:
    print('6')
elif carta_jugador < 0.7:
    print('7')
elif carta_jugador < 0.8:
    print('8')
elif carta_jugador < 0.9:
    print('9')
else:
    print('10')
print("")
print("Ahora, escribe el número de tu carta para compararla con el número de la carta que sacó el computador")
print('')
carta_obtenida = input("> ")

carta_computador = ''

carta = randint(1, 10)
if carta == 1:
    carta_computador = '1'
elif carta == 2:
    carta_computador = '2'
elif carta == 3:
    carta_computador = '3'
elif carta == 4:
    carta_computador = '4'
elif carta == 5:
    carta_computador = '5'
elif carta == 6:
    carta_computador = '6'
elif carta ==   7:
    carta_computador = '7'
elif carta == 8:
    carta_computador = '8'
elif carta == 9:
    carta_computador = '9'
else:
    carta_computador = '10'

if carta_obtenida == carta_computador:
    print("Empate, ambos sacaron la misma carta")
elif carta_obtenida > carta_computador:
    print("Ganaste, sacaste una carta mayor")
else:
    print("Perdiste, el computador sacó una carta mayor")
\`\`\``,
    };
  },
};
</script>

<style scoped lang="scss">
header {
  text-align: center;
  margin-bottom: 2.5rem;
  h1 {
    margin-bottom: 0;
    margin-top: 0;
  }
  h4 {
    margin-bottom: 0;
  }
}
</style>
