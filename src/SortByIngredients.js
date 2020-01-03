import React from 'react';

const SortByIngredients = (props) => {
    return (
      <div className="checkboxes">
        <fieldset className="fieldset">
          <legend>選擇你的食材</legend>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="肉" name="肉" value="肉" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="肉">肉</label>
          </div>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="水果" name="水果" value="水果" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="水果">水果</label>
          </div>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="蔬菜" name="蔬菜" value="蔬菜" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="蔬菜">蔬菜</label>
          </div>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="麵粉" name="麵粉" value="麵粉" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="麵粉">麵粉</label>
          </div>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="冰塊" name="冰塊" value="冰塊" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="冰塊">冰塊</label>
          </div>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="蘑菇" name="蘑菇" value="蘑菇" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="蘑菇">蘑菇</label>
          </div>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="蜂蜜" name="蜂蜜" value="蜂蜜" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="蜂蜜">蜂蜜</label>
          </div>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="牛奶" name="牛奶" value="牛奶" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="牛奶">牛奶</label>
          </div>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="魚類" name="魚類" value="魚類" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="魚類">魚類</label>
          </div>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="特定海鮮類" name="特定海鮮類" value="特定海鮮類" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="特定海鮮類">特定海鮮類</label>
          </div>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="草莓" name="草莓" value="草莓" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="草莓">草莓</label>
          </div>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="松茸" name="松茸" value="松茸" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="松茸">松茸</label>
          </div>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="胡蘿蔔" name="胡蘿蔔" value="胡蘿蔔" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="胡蘿蔔">胡蘿蔔</label>
          </div>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="藍莓" name="藍莓" value="藍莓" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="藍莓">藍莓</label>
          </div>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="玉米" name="玉米" value="玉米" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="玉米">玉米</label>
          </div>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="朝天椒" name="朝天椒" value="朝天椒" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="朝天椒">朝天椒</label>
          </div>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="禽蛋" name="禽蛋" value="禽蛋" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="禽蛋">禽蛋</label>
          </div>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="椰子" name="椰子" value="椰子" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="椰子">椰子</label>
          </div>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="西瓜" name="西瓜" value="西瓜" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="西瓜">西瓜</label>
          </div>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="南瓜" name="南瓜" value="南瓜" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="南瓜">南瓜</label>
          </div>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="大米" name="大米" value="大米" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="大米">大米</label>
          </div>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="醬料" name="醬料" value="醬料" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="醬料">醬料</label>
          </div>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="調料" name="調料" value="調料" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="調料">調料</label>
          </div>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="鳳梨" name="鳳梨" value="鳳梨" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="鳳梨">鳳梨</label>
          </div>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="蔥薑蒜" name="蔥薑蒜" value="蔥薑蒜" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="蔥薑蒜">蔥薑蒜</label>
          </div>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="動物內臟" name="動物內臟" value="動物內臟" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="動物內臟">動物內臟</label>
          </div>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="食用油" name="食用油" value="食用油" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="食用油">食用油</label>
          </div>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="豆腐" name="豆腐" value="豆腐" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="豆腐">豆腐</label>
          </div>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="粉絲" name="粉絲" value="粉絲" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="粉絲">粉絲</label>
          </div>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="糖" name="糖" value="糖" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="糖">糖</label>
          </div>
          <div className="ingredient-checkbox">
            <input type="checkbox" id="特殊備註" name="特殊備註" value="特殊備註" onChange={(e) => props.onHandleChangeIngredients(e)} />
            <label htmlFor="特殊備註">特殊備註</label>
          </div>
        </fieldset>
      </div>
    );
}

export default SortByIngredients;