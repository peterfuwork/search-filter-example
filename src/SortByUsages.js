import React from 'react';

const SortByUsages = (props) => {
    return (
      <div className="checkboxes">
        <fieldset className="fieldset">
          <legend>選擇需要的屬性</legend>
            <div className="usage-checkbox">
              <input className="checkbox" type="checkbox" id="無特殊屬性" name="無特殊屬性" value="無特殊屬性" onChange={(e) => props.onHandleChangeUsages(e)} />
              <label htmlFor="無特殊屬性">無特殊屬性</label>
            </div>
            <div className="usage-checkbox">
              <input className="checkbox" type="checkbox" id="回復血量" name="回復血量" value="回復血量" onChange={(e) => props.onHandleChangeUsages(e)} />
              <label htmlFor="回復血量">回復血量</label>
            </div>
            <div className="usage-checkbox">
              <input className="checkbox" type="checkbox" id="回復健康值" name="回復健康值" value="回復健康值" onChange={(e) => props.onHandleChangeUsages(e)} />
              <label htmlFor="回復健康值">回復健康值</label>
            </div>
            <div className="usage-checkbox">
              <input className="checkbox" type="checkbox" id="移速加成" name="移速加成" value="移速加成" onChange={(e) => props.onHandleChangeUsages(e)} />
              <label htmlFor="移速加成">移速加成</label>
            </div>
            <div className="usage-checkbox">
              <input className="checkbox" type="checkbox" id="採集速度" name="採集速度" value="採集速度" onChange={(e) => props.onHandleChangeUsages(e)} />
              <label htmlFor="採集速度">採集速度</label>
            </div>
            <div className="usage-checkbox">
              <input className="checkbox" type="checkbox" id="採集暴擊" name="採集暴擊" value="採集暴擊" onChange={(e) => props.onHandleChangeUsages(e)} />
              <label htmlFor="採集暴擊">採集暴擊</label>
            </div>
            <div className="usage-checkbox">
              <input className="checkbox" type="checkbox" id="生命上限" name="生命上限" value="生命上限" onChange={(e) => props.onHandleChangeUsages(e)} />
              <label htmlFor="生命上限">生命上限</label>
            </div>
            <div className="usage-checkbox">
              <input className="checkbox" type="checkbox" id="傷害加成" name="傷害加成" value="傷害加成" onChange={(e) => props.onHandleChangeUsages(e)} />
              <label htmlFor="傷害加成">傷害加成</label>
            </div>
            <div className="usage-checkbox">
              <input className="checkbox" type="checkbox" id="暴擊率" name="暴擊率" value="暴擊率" onChange={(e) => props.onHandleChangeUsages(e)} />
              <label htmlFor="暴擊率">暴擊率</label>
            </div>
            <div className="usage-checkbox">
              <input className="checkbox" type="checkbox" id="熟練度獲取" name="熟練度獲取" value="熟練度獲取" onChange={(e) => props.onHandleChangeUsages(e)} />
              <label htmlFor="熟練度獲取">熟練度獲取</label>
            </div>
            <div className="usage-checkbox">
              <input className="checkbox" type="checkbox" id="最大氣息" name="最大氣息" value="最大氣息" onChange={(e) => props.onHandleChangeUsages(e)} />
              <label htmlFor="最大氣息">最大氣息</label>
            </div>
            <div className="usage-checkbox">
              <input className="checkbox" type="checkbox" id="改變體溫" name="改變體溫" value="改變體溫" onChange={(e) => props.onHandleChangeUsages(e)} />
              <label htmlFor="改變體溫">改變體溫</label>
            </div>
            <div className="usage-checkbox">
              <input className="checkbox" type="checkbox" id="去除感冒" name="去除感冒" value="去除感冒" onChange={(e) => props.onHandleChangeUsages(e)} />
              <label htmlFor="去除感冒">去除感冒</label>
            </div>
            <div className="usage-checkbox">
              <input className="checkbox" type="checkbox" id="游泳速度" name="游泳速度" value="游泳速度" onChange={(e) => props.onHandleChangeUsages(e)} />
              <label htmlFor="游泳速度">游泳速度</label>
            </div>
            <div className="usage-checkbox">
              <input className="checkbox" type="checkbox" id="補彈消耗降低" name="補彈消耗降低" value="補彈消耗降低" onChange={(e) => props.onHandleChangeUsages(e)} />
              <label htmlFor="補彈消耗降低">補彈消耗降低</label>
            </div>
            <div className="usage-checkbox">
              <input className="checkbox" type="checkbox" id="暴擊減免" name="暴擊減免" value="暴擊減免" onChange={(e) => props.onHandleChangeUsages(e)} />
              <label htmlFor="暴擊減免">暴擊減免</label>
            </div>
            <div className="usage-checkbox">
              <input className="checkbox" type="checkbox" id="抗惡劣環境" name="抗惡劣環境" value="抗惡劣環境" onChange={(e) => props.onHandleChangeUsages(e)} />
              <label htmlFor="抗惡劣環境">抗惡劣環境</label>
            </div>
            <div className="usage-checkbox">
              <input className="checkbox" type="checkbox" id="穩定性" name="穩定性" value="穩定性" onChange={(e) => props.onHandleChangeUsages(e)} />
              <label htmlFor="穩定性">穩定性</label>
            </div>
            <div className="usage-checkbox">
              <input className="checkbox" type="checkbox" id="換彈加速" name="換彈加速" value="換彈加速" onChange={(e) => props.onHandleChangeUsages(e)} />
              <label htmlFor="換彈加速">換彈加速</label>
            </div>
            <div className="usage-checkbox">
              <input className="checkbox" type="checkbox" id="射程增加" name="射程增加" value="射程增加" onChange={(e) => props.onHandleChangeUsages(e)} />
              <label htmlFor="射程增加">射程增加</label>
            </div>
            <div className="usage-checkbox">
              <input className="checkbox" type="checkbox" id="爆頭傷害" name="爆頭傷害" value="爆頭傷害" onChange={(e) => props.onHandleChangeUsages(e)} />
              <label htmlFor="爆頭傷害">爆頭傷害</label>
            </div>
            <div className="usage-checkbox">
              <input className="checkbox" type="checkbox" id="冷兵器揮擊速度" name="冷兵器揮擊速度" value="冷兵器揮擊速度" onChange={(e) => props.onHandleChangeUsages(e)} />
              <label htmlFor="冷兵器揮擊速度">冷兵器揮擊速度</label>
            </div>
            <div className="usage-checkbox">
              <input className="checkbox" type="checkbox" id="射速增加" name="射速增加" value="射速增加" onChange={(e) => props.onHandleChangeUsages(e)} />
              <label htmlFor="射速增加">射速增加</label>
            </div>
            <div className="usage-checkbox">
              <input className="checkbox" type="checkbox" id="攜帶彈藥量" name="攜帶彈藥量" value="攜帶彈藥量" onChange={(e) => props.onHandleChangeUsages(e)} />
              <label htmlFor="攜帶彈藥量">攜帶彈藥量</label>
            </div>
            <div className="usage-checkbox">
              <input className="checkbox" type="checkbox" id="奔跑消耗體力減少" name="奔跑消耗體力減少" value="奔跑消耗體力減少" onChange={(e) => props.onHandleChangeUsages(e)} />
              <label htmlFor="奔跑消耗體力減少">奔跑消耗體力減少</label>
            </div>
            <div className="usage-checkbox">
              <input className="checkbox" type="checkbox" id="體力上限" name="體力上限" value="體力上限" onChange={(e) => props.onHandleChangeUsages(e)} />
              <label htmlFor="體力上限">體力上限</label>
            </div>
            <div className="deselect-checkbox">
              <input className="checkbox" type="checkbox" id="取消所有選取" name="取消所有選取" value="取消所有選取" onChange={() => props.resetAllCheckboxes()} />
              <label htmlFor="取消所有選取">取消所有選取</label>
            </div>
        </fieldset>
      </div>
    );
}

export default SortByUsages;