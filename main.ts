let S1_KL = 0
let S2_LB = 0
let Verbrauch_KL = 0
let Verbrauch_LB = 0
let Gesamtstrecke = 0
let Gesamtverbrauch = 0
let StreckeLiter = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    S1_KL = 500
    S2_LB = 200
    Verbrauch_KL = S1_KL * 0.07
    Verbrauch_LB = S2_LB * 0.07
    Gesamtstrecke = Verbrauch_LB + Verbrauch_KL
    Gesamtverbrauch = Verbrauch_KL + Verbrauch_LB
    Gesamtverbrauch += Gesamtstrecke / (3 * 0.09)
    storage.putNumber(StorageSlots.s1, Verbrauch_KL)
    storage.putNumber(StorageSlots.s2, Verbrauch_LB)
    storage.putNumber(StorageSlots.s3, Gesamtverbrauch)
    basic.showNumber(storage.getNumber(StorageSlots.s1))
    basic.showNumber(storage.getNumber(StorageSlots.s2))
    basic.showNumber(storage.getNumber(StorageSlots.s3))
    StreckeLiter = Gesamtstrecke / Gesamtverbrauch
    basic.showNumber(StreckeLiter * 55)
})
